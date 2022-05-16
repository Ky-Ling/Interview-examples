
"""
https://www.youtube.com/watch?v=NYFVh46fvpI&t=1032s
"""


"""
1) Double an array
"""


def solution1_for_problem1(a):
    res = [0] * (2 * len(a))

    for i in range(len(a)):
        res[i] = a[i]
        res[i + len(a)] = a[i]

    return res


def solution2_for_problem1(a):
    return [a[i % len(a)] for i in range(len(a) * 2)]


print(solution1_for_problem1([1, 3, 4]))
print(solution2_for_problem1([1, 3, 4]))


"""
2) Return the shortest edge of the squares that fit in the given rectangles
"""

""""
input:  [[5, 8], [3, 9], [5, 12], [16, 5]] 
output: 3
"""


def solution1_for_problem2(array: list[list: int]):
    maxValue = -1
    output = 0

    for rect in array:

        if rect[0] < rect[1]:
            if rect[0] > maxValue:
                maxValue = rect[0]
                output = 1
            elif rect[0] == maxValue:
                output += 1
            else:
                pass

        elif rect[0] > rect[1]:
            if rect[1] > maxValue:
                maxValue = rect[1]
                output = 1
            elif rect[1] == maxValue:
                output += 1

            else:
                pass

    return output


print(solution1_for_problem2([[2, 4], [5, 6], [12, 5], [5, 3], [5, 2]]))


"""
3) Given a complete binary tree, return the count of all the nodes in the tree
"""

# Since this is a binary tree, I can count all nodes using DFS, it should count go over all nodes level by level
#  it will take n number of steps or the complexity of n. This way will solve this problem, it is easy
#   to implement just like a recursive function. But since the problem is stated that this is a complete
#   binart tree, then there must be an utilizes.

# We have to always state the interviewer the immediate answer, if we already have a solution even if we know
#   this is not the best solution, just go ahead the immediate answer. "I know there must be a better solution,
#   I just didn't think about it yet, do you want me to implement the brute force solution? " -> Most of time
#   we just need to tell the interviewer the idea and approach, most of time interviewer won't let us implement
#   in code.


# For interviewer: we look for someone who can problem solve, if you did what i told you and you already prove
#   that, and you provide two different solutions. We want to someone know how to code and in order to test
#   your coding ability, i do not really care if you implement brute force or optimized solution, because
#   right now i am just testing your code ability, i am testing that you write a clean code, you know how
#   to test for edge cases, how to write conditions for verification of input, stuff like that


# If we go into a interview and give interviewer an answer to that question in the first 10/15 minutes, it
#   would make them feel much easier to give us hints.


# So if we are given a full binary tree and we wanna get the number of node, we do not need to multiply
#   this entire tree into two trees, all we need to know to calculate the number of nodes is the height,
#   --> if the height is n(starting index is 0), the nodes of full binary tree is (2^(n + 1)) - 1.
#   for example: 3 -> 15. Because on each level, the number of nodes is multiplying by 2, except the first
#   level, that is why we need to minus one.
#
# If it is not a full binary tree:
#   We need to calculate the height from the left side and the height from right side. It will have two if
#   statement. If left height == right height, just return the equation formula. If they are not, that is
#   what we need to do to complete this problem. What we need to do if the height is different?




"""
Naive Approach: The simple approach to solve the given tree is to perform the DFS Traversal on the given tree and 
    count the number of nodes in it. After traversal, print the total count of nodes obtained.

Time Complexity: O(N)
Auxiliary Space: O(1) 
"""


"""
Better Solution(describe as above): 

Time Complexity: O((log N)2)
Auxiliary Space: O(log N) because of Recursion Stack Space
"""

class Node:
    def __init__(self, key) -> None:
        self.left = None
        self.right = None
        self.val = key


def left_height(node):
    height = 0
    
    while node:
        height += 1
        node = node.left

    return height


def right_height(node):
    height = 0

    while node:
        height += 1
        node = node.right

    return height


def total_height(root):
    if not root:
        return 0

    lh = left_height(root)
    rh = right_height(root)

    if lh == rh:
        return (1 << lh) - 1
    
    else:
        return 1 + total_height(root.left) + total_height(root.right)

    










# Feedback:
"""
As we talked on the session, please pay attention to the following:

1- Ask as much questions as you need. Always ask for an example when anything is unclear. You are doing that already, 
    so just continue doing that.

2- After you ask, make your own example, put numbers on it and see if you understand the problem clearly. Again, 
    you are doing that already. Very good!

3- Go into any interview with the mindset that you are talking to your coworker and you both are solving a problem at work. 
    With that mindset, not only you would be much more relaxed in any interview, you would also be able to 
    speak your mind (which is a HUGE plus in any interview) and interviewers would naturally find it easier to give you hints

4- Always look up for the quickest possible solution to a problem. Quickest solution doesn't always mean that it's the worst 
    solution. Sometimes a perfect solution doesn't even exist (for example, NP complete problems). Communicate that solution 
    to the interviewer and ask them if they want you to implement it or think about a better solution. Sometimes that "quick" 
    solution is all what's needed to pass the interview!

5- Always divide any problem into sub-problems and do them one by one. 
"""
