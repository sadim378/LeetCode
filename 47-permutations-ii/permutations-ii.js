var permuteUnique = function(nums) {
    let results = [];
    
    nums.sort((a, b) => a - b);
    
    let used = new Array(nums.length).fill(false);
    
    function makePermutations(current) {
        if (current.length === nums.length) {
            results.push([...current]);
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            
            if (i > 0 && nums[i] === nums[i-1] && !used[i-1]) continue;
            
            used[i] = true;
            current.push(nums[i]);
            
            makePermutations(current);
            
            current.pop();
            used[i] = false;
        }
    }
    
    makePermutations([]);
    return results;
};