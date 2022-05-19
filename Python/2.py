"""
Given a binary tree where all the right nodes are either leaf nodes with a sibling (a left node that shares the same parent 
node) or empty, flip it upside down and turn it into a tree where the original right nodes turned into left leaf nodes. 
Return the new root.

             
Input: [1,2,3,4,5]
    1
   / \
  2   3
 / \
4   5

Output: return the root of the binary tree [4,5,2,#,#,3,1]
   4
  / \
 5   2
    / \
   3   1
"""


class TreeNode:
    def __init__(self, value=None, left=None, right=None) -> None:
        self.value = value
        self.left = left
        self.right = right

class Solution:

    def upside_down(self, root: TreeNode | None):
        if not root:
            return None
        
        stack = [root]

        while stack[-1].left:
            stack.append(stack[-1].left)
        
        res = stack[-1]

        while len(stack) > 1:
            t = stack.pop()
            t.right = stack[-1]
            t.left = stack[-1].right
        stack[-1].left = None
        stack[-1].right = None

        return res

    def inorder(self, node: TreeNode, res):
        if not node:
            return None
        
        self.inorder(node.left, res)
        res.append(node.value)
        self.inorder(node.right, res)

        return res

    
l = TreeNode(1)
l.left = TreeNode(2)
l.right = TreeNode(3)
l.left.left = TreeNode(4)
l.left.right = TreeNode(5)

s = Solution()

# print(s.inorder(l, []))
# print(s.upside_down(l))
print(s.inorder(s.upside_down(l), []))

    
