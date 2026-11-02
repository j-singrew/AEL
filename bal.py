def is_balanced(expression):

    stack = []

    open = ['[', '{', '(']
    closed = [']', '}', ')']

    for item in expression:
        if item in open:
            stack.append(item)
        elif item in closed:
            if not stack:
                return "List is not balanced"
            last = stack.pop()
            if open.index(last) != closed.index(item):
                return "List is not balanced"
    if len(stack) != 0:
        return "List is not balanced"
    return "List is balanced"


        



    


    


    



print(is_balanced("[()]"))
