# Assignment 1: Github Configuration, and a work of abstract art using p5

## Github
1. Go to [github.com](https://github.com/) and create an account
1. Add your Github username to the Google Form linked on the course [Canvas](https://canvas.american.edu) page (I'd link it directly here, but this website is public).
1. Download and install [Github Desktop](https://desktop.github.com/)
1. Log into Github desktop

## Create your repository for the class
1. Open Github desktop and log in (you may need to go to Preferences->Accounts)
1. Add a repository for the exercise
    - Name the repository exactly `computational-art-spring2024` **Make 100% certain you are using that exact name - all lowercase**
    - Make the repository public by unchecking "Keep this repository private"
    - For Local Path put it wherever you like to keep your class files on your computer
    - Ignore the other setting options
    - Check "Initialize this repository with a README"
    - Click "Create Repository"
1. Locate the repository folder on your computer, and a folder named `assignments`.
1. Commit your changes to the repository "locally" by typing a brief summary of what you did in the Summary field (e.g. "Created the repository for comp-art" or something) and click "Commit to master" (this should be on the bottom left of the window).
1. On the top/middle region of the screen, click "Publish repository"
1. In the future, in order to upload your assignments to Github you will go through a similar process as what you did in the last two steps. You will need to first "commit" your changes, and then you will press the button labeled "Push origin" (located at the same place as the "Publish repository" button).

## Setting up your Github repository for submitting work
- Go to your web browser, log into github.com, and find the repository you just created and published (click the repositories tab).
- Click the "Settings" tab (located in the top middle of the window). Then, click the "Pages" button on the left middle of that window. In that window, under the label that says "Branch" there will be a dropdown that reads "None". Select "main" and click the save button. The purpose of this is to enable your github repository to provide "static hosting". This means that you can post your javascript/html projects and have anyone on the web access them as webpages.
- NOTE: If you get something that says "Upgrade or make this repository public to enable Pages", this means that you did not uncheck the box that read "keep it private" when you published your repository. To fix this, you will need to click the "General button" (on the left side of the screen), then scroll down to the bottom of the page where it says "Danger Zone" and click the "Change visibility" button. Follow the steps to make your repository "public", and then try this step again.

## p5 setup

1. Download the [p5 library (click here to download)](https://github.com/processing/p5.js/releases/download/v1.9.0/p5.zip). 
1. Unzip, and then place this folder inside of your local `computational-art-spring2024` folder/respository on your computer.
1. Rename the `p5` folder to `assignments`. 
1. Inside of that folder is a folder named `empty-example`. Rename that to `01_abstract`.
1. Delete the file named `.gitignore` inside of the `01_abstract` folder. If you have hidden files hidden on your computer (which most of you probably do), you will need to use the file viewer inside of Visual Studio Code to see and then delete the file. **This is important**

## Creative Assignment

Finally, for your creative assignment, use p5 to create an work of abstract art. Given that we are new to using p5 and making computational visuals, I expect your project to be more like [abstract expressionism](https://en.wikipedia.org/wiki/Abstract_expressionism) than a pixar movie or something. In addition to using a bunch of p5 functions, challenge yourself to make use of classes and arrays.

Write your code inside of the `sketch.js` file inside of the `01_abstract` folder, and run your code by opening up the `index.html` file using a web browser.

When you are done, commit and push your changes to your repository in Github Desktop.

If everything worked, you should be able to see your assignment by going to this link:

```
YOUR_GIHUB_USERNAME.github.io/computational-art-spring2024/assignments/01_abstract
```

If this doesn't work, take a closer look at all of the above instructions. If you still have problems after carefully reviewing everything, send me an email or come to office hours.