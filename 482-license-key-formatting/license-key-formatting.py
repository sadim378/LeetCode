class Solution:
    def licenseKeyFormatting(self, s: str, k: int) -> str:
        s = s.replace("-", "").upper()

        result = []

        while len(s) > k:
            result.append(s[-k:])
            s = s[:-k]

        result.append(s)

        return "-".join(result[::-1])