
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNPmnRnCoreSpec.h"

@interface PmnRnCore : NSObject <NativePmnRnCoreSpec>
#else
#import <React/RCTBridgeModule.h>

@interface PmnRnCore : NSObject <RCTBridgeModule>
#endif

@end
