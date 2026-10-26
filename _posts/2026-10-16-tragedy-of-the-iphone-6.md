---
layout: minif-blog
published: true
title:  "The tragedy of the iPhone 6"
categories: Technology
tags: Technology
---

Wouldn't it be cool if magic existed in our world? Like, if we could cast spells and craft magical tools to do anything we could dream of? Magic systems often have rules attached to them, of course. But under those rules you can do many spectacular things, you could conjure fireballs, lightning bolts, or maybe use magical flight to soar above the skies. But magic is just something we imagine and doesn't exist in our world. 

Well, the fact that you are reading this right now very much proves magic exists. Just not how we always imagine it.

I don't know how much people realize but I always think we don't appreciate it enough; the age technology is really, really cool. One may describe it as magic. Calling something "magic" could be a way to say that you don't understand how it works. But the more I learn how it works, the more "magic" technology seems to me. The only difference between magic in our would and magic in fantasy is the specific rules to follow. 

Oh, and also maybe fantasy magic doesn't get stuck on iOS 12.5.8.

The point that I am getting at is that I have a very different perception of older technology to most. I think it is awesome that we have microprocessors that we can program to do what we want, to fulfill whatever purpose we need. And it's also cool that every year, microprocessors get better and better. But, in the world that we live in, it costs time and money to make things. And if people can't justify the cost they don't make it. And, despite being perfectly fine, the "old" technology gets left behind, which reduces its usefulness. And I think this is really unfortunate, as I think it being "old" shouldn't make it any less useful. 

That is kind of the basis for the "upgrade culture" that we are in. That device you bought for a purpose; it does exactly what it did when you bought it. But that device is now 10+ years old, and devices sold nowadays eclipse it in every aspect possible. And because of that, nobody really writes software for it anymore. And if the use of that device involves network connectivity, well, good luck using that, considering evolving security and changes to APIs.

So far I have described the drop of support as "nobody really writes software for it anymore". Let me clarify: It is mostly the manufacturers that do not want to support it. Of course, they are obliged to provide software updates for a number of years. But eventually they deem not enough people will care if the device is dropped. For Apple devices in particular, this dooms the device because Apple [dictates everything that runs on its phones](https://support.apple.com/en-ca/guide/security/secb3000f149/1/web/1). That means once Apple no longer cares for a smartphone, it is stuck with whatever Apple left with it. And eventually, writing apps for these devices become not worth the effort for developers, or maybe not even possible!

There has been once big saving grace to this all: Jailbreaking. This is the process of exploiting security flaws to run code not approved by manufacturers. This is very common in video game consoles and back in the day when the iPhone was primitive. And with it, we can write whatever software we want and run it, without the need to get it approved by the manufacturer. As this all relies on exploits, unfortunately what you can do can be limited. And as Apple devices get newer, security has gotten better and better. Which means that, often times, the newer the device the less jailbreaking potential you get. 

Say, if newer devices have better official support, and older devices have better unofficial support, this means there is some "middle of the road" that doesn't really have either, right?

...

Apple released the iPhone 6 in 2014, and sold well over 200 million units. In fact, to this date the iPhone 6 remains the best selling smartphone ever. It was available with 16 to 128gb of storage, offered two different sizes, and three different colours. While I never used it back in the day (though I had the 6s) I assume it was probably a good phone while it was recent. It released on iOS 8, and received major updates up to and including iOS 12 in 2018. iOS 12 in particular was a great update, as it brought speed and stability improvements after the disaster of iOS 11.

Fast forward to today, and unfortunately the iPhone 6 is not really feasible as a daily driver phone, outside of maybe some basic calls and texts. As iOS 12 was superseded in 2019, it didn't take long for iOS app developers to drop support for this version of iOS. I think this was partially accelerated by the introduction to SwiftUI in iOS 13, which introduced a language with declarative syntax to make UI easier to develop (or so I hear, I personally have never used it). And even if a developer wanted to develop apps for iOS 12, Xcode tends to have a limit on how far back you can develop iOS apps for, which is now iOS 15 (per Xcode 27). As you are required to use the latest SDK to publish iOS apps, nobody can publish apps for older devices even if they tried. Also, Apple infamously requires web browsers to use WebKit, which are only updated when iOS receives updates. This means that web browsing slowly becomes unusable, as web design standards evolve and require more features for websites to work. 

(Update: I have learned some things regarding this. Turns out you were able to bypass Xcode's limitations by manually adding the support files and setting the target lower than what Xcode officially supports. This enabled you to support iOS 9 on all 64-bit devices. But recently Apple now checks and rejects apps that support iOS 12 and below. Which proves the point: nobody can publish apps for older devices even if they tried).

So basically, using an iPhone 6 how many people typically do in 2026 is impossible. Too few websites and apps nowadays run for it to be worth it.

So, what about older apps? 

Apple also infamously dropped support for all 32-bit iOS apps in iOS 11. Many iconic iOS apps and games are not possible to run on the latest version anymore. So that means that app support is better on both newer AND older iOS versions. That being said, finding 32 bit apps in 2026 is kind of a hard task, so you either have to sync apps downloaded from iTunes, or find old apps in iOS app archives. 

Unfortunately, iOS 12 is also in an awkward middle spot for jailbreaking. Older devices and firmwares have "untethered" jailbreaks, meaning that the exploit chain occurs before the device fully boots. An untethered jailbreak was actually released pretty recently for 32-bit iOS 10 devices, and currently all 32-bit devices on their respective latest versions have them. Unfortunately, no 64-bit iOS device (which includes the iPhone 6) has an untethered jailbreak on the latest version. 

What makes things unfortunate for iOS 12 devices is the lack of Trollstore. Trollstore takes advantage of a Coretrust bug to bypass Apple's requirements for code-signing, basically offering full unrestricted sideloading. And the underlying bug is available for iOS 14-17.0.0. Yeah, iOS 12, and by extension all the devices unable to upgrade past it, missed out on what is probably one of the best iOS exploits of all time. That means that the iPhone 6s and 7, which were released AFTER the iPhone 6, have a better jailbreaking experience because they can just sideload the jailbreak app to re-run the jailbreak. Or just sideload whatever app you need.

The saving grace for iOS 12 is that there is a webkit re-jailbreak for it. It is hit or miss, and it requires an internet connection, but it does at least work. So there is no need to constantly re-sign a jailbreak app to get it to run. 

One last aside, there has been a few web browsers popping up that do not use the version of webkit iOS ships with. Many of them do not run on iOS 12, and the ones that do crash due to the lack of RAM on the iPhone 6 (I guess a gigabyte of ram doesn't do the trick). I don't have much to say because I have not tried to find a good web browser that works. 

If iOS 12 is so hard to use, why not install a different version of iOS? or a different operating system entirely?

Yeah about that...

I mentioned this before but I really need to emphasize it: Apple dictates what runs on your device. And currently, for the iPhone 6, that is iOS 12. Nothing newer, older, or different. This is because Apple must "sign" any version you want to boot to your device. This signature is both device and version specific, so you can't share signatures or use signatures for different versions. And forget anything that is not iOS. An iPhone 6 on iOS 12 is on iOS 12 forever.

Well, mostly. There exists bootrom exploits for the iPhone 6. But these exploits are "tethered", meaning that the device must be re-exploited every time it turns on. This means that, if the battery dies, you are unable to use the device at all unless you plug it into a computer to re-run the exploit. 

I haven't mentioned the iPhone 5s at all yet in this article. It suffers with basically all the same issues as the iPhone 6, as it also received iOS 12 as its final update. Why haven't I talked about it yet? While it is true it does suffer from a lot of the same issues, it has one thing over the iPhone 6: iOS 10 being signed. The whole thing I was talking about before with the iPhone 6 only being able to run iOS 12, the 5s gets one (1) additional choice. And downgrading to iOS 10 brings back 32-bit app support, letting you use the 5s as a pretty good option to play a lot of classic iOS games. That being said, everything about the iPhone 6 also fully applies to the iPad Mini 3 and the iPod Touch 6th gen as well, as those devices do not have iOS 10 signed. While nowhere near as common, these are still neat devices that deserve more than being stuck on iOS 12 forever.

That's about it for my thoughts on this. I thought of, and wrote this post because I have been wishing that my iPhone 6 could do a bit more. Compared to basically every other iOS device I have (newer and older), it is kind of hard to find a purpose for, or have fun with. And this is a shame, as the iPhone 6 is very much capable for everyday smartphone use, as our needs haven't really changed since it was released. In a better world, the iPhone 6 would be all a person would need.
