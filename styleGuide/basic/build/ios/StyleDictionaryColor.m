
//
// StyleDictionaryColor.m
//
// Do not edit directly
// Generated on Thu, 05 Mar 2020 16:46:34 GMT
//

#import "StyleDictionaryColor.h"


@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.184f green:0.694f blue:0.325f alpha:1.000f],
[UIColor colorWithRed:0.137f green:0.518f blue:0.243f alpha:1.000f],
[UIColor colorWithRed:0.106f green:0.106f blue:0.106f alpha:1.000f],
[UIColor colorWithRed:0.180f green:0.180f blue:0.180f alpha:1.000f],
[UIColor colorWithRed:0.271f green:0.271f blue:0.271f alpha:1.000f],
[UIColor colorWithRed:0.459f green:0.459f blue:0.459f alpha:1.000f],
[UIColor colorWithRed:0.788f green:0.788f blue:0.788f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.969f green:0.969f blue:0.969f alpha:1.000f],
[UIColor colorWithRed:0.000f green:1.000f blue:0.000f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
