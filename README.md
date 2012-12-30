# Napp SearchBar Extended

## Description

The NappSearchBarExtended Module extends the Appcelerator Titanium Mobile framework with additional functionality.
The TiUISearchBar has limited styling capabilities and this module extends it. 

![NappSearchBarExtended](https://github.com/viezel/NappSearchBarExtended/blob/master/documentation/image.png)

The module is licensed under the MIT license.


## Referencing the module in your Titanium Mobile application ##

Simply add the following lines to your `tiapp.xml` file:
    
    <modules>
        <module version="1.0" platform="iphone">dk.napp.searchbar</module> 
    </modules>


## Reference

For more detailed code examples take a look into the example app

### searchFieldBackgroundImage
Makes it possible to alter the default rounded textfield of the searchbar into a custom image.

### customCancel
Customise the cancel button.

* *barColor* - background gradient of the button. (similar to navbar)
* *color* - color of the button title
* *title* - change the default *Cancel* text
* *font* - set the font of the button

Notice: This is a iOS5+ feature.

### color & font
This extended searchBar makes the TiUIView default parameters of color and font.

### barColor
Setting the barColor to `transparent` will remove the default gradient iOS background. 
Use `backgroundColor` or `backgroundGradient` to get a custom searchBar view result.  

### disableSearchIcon
Remove the default search icon in the left side of the textfield. 

## Author

**Mads Møller**  
web: http://www.napp.dk  
email: mm@napp.dk  
twitter: @nappdev  

## License

    Copyright (c) 2010-2012 Napp

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.