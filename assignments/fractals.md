# Assignment 7: Fractals

**Name your project folder `07_fractals`.**

Creeate a piece of computational art that makes use of recusion to create an interesting sketch that would be difficult to do without using recursion (it does't necessarily have to be fractal, but give it a shot!).

Here are a series of steps and tips that may help you create somethign interesting:

1. Create a simple function that accepts one or more inputs, and draws a shape according to those parameters.
1. Call that function inside of the draw function.
1. Have that function call itself after checking to see that one or more of the parameters aren't too small (or something other condition). When you call the function from within the function, modify the parameters so that eventually the condition will not be met. I was refering to this as the "base case" in class.
1. Make sure your console is open. You may end up with one of two types of related errors: 'Maximum call stack size exceeded', or a blank screen and a frozen tab. Both of these are the result of your function calling itself too many times. In other words, when you are making the recursive call, you are not modifying the parameters suffiently to make the condition false. Note that is you have a frozen tab, you will need to close it and relaunch your live server.
1. Consider creating a global variable called `count` or something, and increment it inside of your function. This can be useful to track how many times your recurive function is being called.
1. Once you get a stable pattern generating, it's time to explore animating it! Carefully experiment with aspects of the shape being drawn, as well as the ways that you are modifying the parameters during your recursive call.
1. Experiment with animating those values over time using functions like `noise` and `sin`. Be mindful of the `count` variable. If it gets too big, you tab will freeze!
1. Play around with the transparency of the `background` function call in your draw function.

## Turning in your assignment

When you are done, commit and push your changes to your repository in Github Desktop.

If everything worked, you should be able to see your assignment by going to this link:

```
YOUR_GIHUB_USERNAME.github.io/computational-art-spring2024/assignments/07_fractals
```

If this doesn't work, take a close look at the [setup assignment](./p5-setup-abstract.html).