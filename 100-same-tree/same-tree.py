class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        
        # দুইটাই empty
        if not p and not q:
            return True
        
        # একটা empty, একটা না
        if not p or not q:
            return False
        
        # value different
        if p.val != q.val:
            return False
        
        # left subtree + right subtree compare
        return (
            self.isSameTree(p.left, q.left) and
            self.isSameTree(p.right, q.right)
        )