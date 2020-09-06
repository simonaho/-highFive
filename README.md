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
