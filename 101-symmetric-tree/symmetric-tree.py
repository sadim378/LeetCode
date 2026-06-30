# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        
        def isMirror(left, right):
            # দুইটাই empty
            if not left and not right:
                return True
            
            # একটা empty
            if not left or not right:
                return False
            
            # value same কিনা check
            if left.val != right.val:
                return False
            
            # mirror check
            return (
                isMirror(left.left, right.right) and
                isMirror(left.right, right.left)
            )
        
        return isMirror(root.left, root.right)