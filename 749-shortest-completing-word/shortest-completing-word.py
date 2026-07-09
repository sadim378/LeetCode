class Solution:
    def shortestCompletingWord(self, licensePlate: str, words: List[str]) -> str:
        need = {}
        for ch in licensePlate.lower():
            if ch.isalpha():
                need[ch] = need.get(ch, 0) + 1
        answer = ""
        for word in words:
            have = {}
            for ch in word:
                have[ch] = have.get(ch, 0) + 1
            ok = True
            for ch in need:
                if have.get(ch, 0) < need[ch]:
                    ok = False
                    break                                  
            if ok:
                if answer == "" or len(word) < len(answer):
                    answer = word

        return answer