
/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
var cancellable = function(generator) {
    let cancelled = false;
    let finished = false;
    let cancelCurrent;

    const promise = (async () => {
        try {
            let result = generator.next();

            while (!result.done) {
                try {
                    let value;

                    if (cancelled) {
                        value = await result.value;
                    } else {
                        const cancelPromise = new Promise((_, reject) => {
                            cancelCurrent = () => reject("Cancelled");
                        });

                        value = await Promise.race([
                            result.value,
                            cancelPromise
                        ]);
                    }

                    result = generator.next(value);

                } catch (error) {
                    result = generator.throw(error);
                }
            }

            return result.value;

        } finally {
            finished = true;
        }
    })();

    const cancel = () => {
        if (!finished && !cancelled) {
            cancelled = true;
            if (cancelCurrent) {
                cancelCurrent();
            }
        }
    };

    return [cancel, promise];
};
