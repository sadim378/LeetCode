class Solution(object):
    def numPrimeArrangements(self, n):
        """
        :type n: int
        :rtype: int
        """
        MOD = 1000000007
        prime = 0

        for num in range(2, n + 1):

            is_prime = True

            for i in range(2, num):
                if num % i == 0:
                    is_prime = False
                    break

            if is_prime:
                prime += 1

        non_prime = n - prime
        prime_factorial = 1

        for i in range(1, prime + 1):
            prime_factorial = prime_factorial * i
            prime_factorial = prime_factorial % MOD

        non_prime_factorial = 1

        for i in range(1, non_prime + 1):
            non_prime_factorial = non_prime_factorial * i
            non_prime_factorial = non_prime_factorial % MOD

        answer = prime_factorial * non_prime_factorial
        answer = answer % MOD

        return answer