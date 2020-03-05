
//
// StyleDictionaryColor.h
//
// Do not edit directly
// Generated on Thu, 05 Mar 2020 16:46:34 GMT
//

#import <UIKit/UIKit.h>


typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorBaseBasic,
ColorBaseNutmegPrimary,
ColorBaseNutmegDark,
ColorBaseGreyscaleCod,
ColorBaseGreyscaleSlate,
ColorBaseGreyscaleMineshaft,
ColorBaseGreyscaleBoulder,
ColorBaseGreyscaleSivler,
ColorBaseGreyscaleMercury,
ColorBaseGreyscaleWildsand,
ColorBaseErrorLight
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
