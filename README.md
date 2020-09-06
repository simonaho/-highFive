# High Five

## שלב 1
כשהקוד מופעל הדליקו את הנורה אמצעית
```blocks
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
```
## שלב 2
הוסיפו לולאה שתפעל כאשר ייסגר מעגל P1.
היעזרו בלבנה מהקבוצה ``||קלט||``
```blocks
input.onPinPressed(TouchPin.P1, function () {
   
})
```
## שלב 3
הוסיפו צליל
```blocks
input.onPinPressed(TouchPin.P1, function () {
    music.playTone(523, music.beat(BeatFraction.Eighth))
})
```
## שלב 4
הציגו סמל שתרצו
```blocks
input.onPinPressed(TouchPin.P1, function () {
    music.playTone(523, music.beat(BeatFraction.Eighth))
    basic.showIcon(IconNames.Happy)
})
```
## שלב 4

לחצו על  ``|הורדה|`` כדי להוריד את הקוד למיקרוביט שלכם

## שלב 5 
גזרו והדביקו שתי צורות כף יד מנייר אלומיניום או דף מוליך אחר
הדביקו אותן על שתי כפפות 

## שלב 6
חברו תנינים אל GRD , P1 של המיקרוביט שלכם
את הקצה השני של כל תנין חברו אל אחת הכפפות כך שהיא תיגע בנייר האלומיניום הדבוק עליה

## שלב 7 
כדי לשמוע צלילים חברו שני תנינים נוספים אל GRD , P0 
את הקצה השני של התנינים חברו אל הרמקול שלכם כפי שמופיע בסימולטור

## שלב 8 @ unplugged
!אתם מוכנים להפעיל את הקוד שכתבתם! בהצלחה




> Open this page at [https://hadascet.github.io/-highfive/](https://hadascet.github.io/-highfive/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/hadascet/-highfive** and import

## Edit this project ![בניית תג מצב](https://github.com/hadascet/-highfive/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/hadascet/-highfive** and click import

## תצוגה מקדימה של בלוקים

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![תצוגה מעובדת של בלוקים](https://github.com/hadascet/-highfive/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
