let mySprite = sprites.create(img`
    ..................................................................................................................................
    ..................................................................................................................................
    ..................................................................................................................................
    ..................................................................................................................................
    ..................................................................................................................................
    ..................................................................................................................................
    ..................................................................................................................................
    ..................................................................................................................................
    ..................................................................................................................................
    ..................................................................................................................................
    ..................................................................................................................................
    ..............................f...........ff......................................................................................
    ..............................fff.........ff......................................................................................
    ..............................f5f.........ff.......ff.............................................................................
    ..............................f5f..ffff..f5f......fff.............................................................................
    ..............................f5f.ff44f.ff5fff...f55f.............................................................................
    .................fff..........f5fff44ffff55f4fffff5f..............................................................................
    ..................ffff..fffffff5ffffff55555f44fff55f..............................................................................
    ..................ff5ff.f4444f5555555555555ffff555ff..............................................................................
    ...................f55fff44f4f55555ffffffff5444555f...............................................................................
    ...................f55ff44455555ffff44444445ff5555f...............................................................................
    ...................ff5ff4ff5555f44445555555555fffff...............................................................................
    ....................f55f4455ff444555555555555555ff................................................................................
    ....................f55544ff444555555555555555555ff...............................................................................
    .....................555fff5555555555fffffffffff55ff..............................................................................
    .....................ffff455555555ffffbbbbbbbbbfffff..............................................................................
    ......................ff44555ffffffbbbbddddddddbbfff..............................................................................
    ......................ff445ffeeffbbbbdddddddddddbfef..............................................................................
    ......................ffffeeee4fbbdddddddddddddddfeff.............................................................................
    ......................fffee4444fffffdddddddddfffffeef.............................................................................
    .....................ffeee4444fddddddddddddddddddfeef.............................................................................
    .....................fee4444effdddffdddddddddffddfeef.............................................................................
    .....................fe44444efddddffdddddddddffddfeef.............................................................................
    .....................f444444efddddffdddddffddffddfeef.............................................................................
    .....................f444444efdddddddddff44ffddddfeeff............................................................................
    .....................ff44444efdddddddff44444ffffdfeeef............................................................................
    ......................f44444efdddddddf444444444ffdfeef............................................................................
    ......................ff4444eeffbffffe4ffffff44ffffeff............................................................................
    .......................ff444ff4ff44fe4ffddddfff44feff.............................................................................
    ........................f44fff44444f4fffffffffff4fff..............................................................................
    ........................ffffcfff444fff44444444444ff...............................................................................
    .........................fffbbbff4444444444444444f........................fffffff.................................................
    ...........................fffffff444444444444444f......................fff99999f.................................................
    .........................fffffffff444444444444444f.....................ff9999999f.................................................
    .......................ffffffffffff44444444444444f....................ff9999999ff.................................................
    .....................ff5555ffffffffff44444444444ff....................f99999999f..................................................
    .....................f55555ffcccccccfff44444ff44f....................f999999999f..................................................
    .....................ff55555fffcccccccff4444ef44f....................f999999999f..................................................
    ......................ff55555555fcccccfff444ef44f...................f999999999ff..................................................
    .................ffffffffff555555ffffff5ff44ef4ff...................f999999999f...................................................
    ..............fffcccccccccfff555555555555fffffff...................f99999999ff..................fff...............................
    ............fffffccccccccccccfff5555555555fcccccfff...............ff9999999f..................ff11f...............................
    ............fffffccccccccccccccfff555555fffccccccccffff...........f99999999f.................ff111f...............................
    ............fffffffccccccccccccccffffffffccccccccccccfff.........f99999999ff................ff1111f...............................
    ............ffffffffcccccccccccccccccccccccccbccccccffff........ff9999999ff................ff11111f.........fffff.................
    ............fffffffffccccccccccccccccccccccccbbcccccffff........f9999999ff.................ff1f111ff.......fddddf.................
    ............ffffffffffccccccccccccccccccccccccbcccccffff.......f99999999f................fff111111ff..ffffffdddff.................
    .............ffffffffffcccccccccccccccccccccccbbcccfffff......ff999999ff.................f1111f111fff.fddddddddf..................
    .............fbffffffffccccccccccccccccccccccccbcccfffff......f9999999f..................f1111111111fffddddddddf..................
    ............ffbbffffffffccccccccccccccccccccccbbccffffbf.....ff99999ff.................fff11111111f1f1fdddddddff..................
    ............fbbbbfffffffccccccccccccccccccccccccccffffbf....ff99999ff...............f1ff1111111111fff1ffddddddf...................
    ...........ffbbbbffffffffcccccccccccccccccccccccccffffbffffff999999f..............ffddf1111111111111111ffddddf....................
    ...........fbbbbbbfffffffccccccccccccccccccccccccfffffbfeeefff9999ff.............ffddf111111111111111111fddddf....................
    ...........fbbbbbbbffffffccccccccccccccccccccbcccffffbbffeeeeff99ff..............fdddf1111111111111111111fdddf....................
    ..........fbbbbbbbbfffffffccccccccccccccccccccccfffffbfffffeeeffff..............ffddf111111111111111111111fddf....................
    ..........fbbbbbbbbbffffffccccccccccccccccccccccffffbbffbfffeeeff...............fdddf111111111111111111111ffff....................
    ..........fbbbbbbbbbbfffffcccccccccccccccccccccffffffbfbbfeffeeeff............ffddddf1111111111111111111111f......................
    .........ffbbbbbbbbbf222fffffcccccccccccccccccfffff.fbfbffeeffeeef............fdddddf1111111111111111111111f......................
    .........fbbbbbbbbbbffff22222fffffffffffffffff2fff..fbbbfeeeeffeef............ffddddf11111111111111111111111ff....................
    .........fbbbbbbbbbbbbbbff222222222222222222222f....ffbbfeffffffff.............fddddf111111111111111f11111111f....................
    ........ffbbbbbbbbbbbbbbbbfff222222222222222222f.....fbffefbbffff..............ffffdf111111111111111f11111111ff...................
    .........bbbbbbbbbbbbbbbbbbbfffffffff222222222f......fffefbbbf...................fddf111111111111111f111111111f...................
    ........fbbbbbbbbbbbbbbbbbbbffffbbbbfff2222222f......ffefbbbbf.................fffddf111111111111111f1111111111f..................
    ........ffffbbbbbbbbbbbbbbbfffbbbbbbbbff222222f.......ffbbbbbf...............fffddddf11111111111111111111111111fe.................
    ............fffbbbbbbbbbbbffffbbbffbbbbf222222f........fffffff..............ffddfffff1111111111111111111111111fffe................
    ..............ffffbbbbbbbffffbbbbbfbffff22222f..f.ffffffffff..............ffdddffdddf111111111111111111111111feeeee...............
    .............f222fffffbbbfffbbbfbbfbbfff22222f.ffff55555555ffffff........ffddddfdddff1111111111111111111111ffeeeeffef.............
    ............f22222222fffffffbbbbfbfbbffff222fff5555ffff555f111111ffff...ffdddddddddf111111111111111111111ffeeeefff1fff............
    ..........f22222222222222ffffbbbeeeeeeee.fffff55555555555f111ffffff1fffffddddddddddf111111111111111111111feeeeef1111f1ff..........
    .........f2222222222222222222feeeeeeeeeeeeff555555555555f11111111111f..ffffddddddddf11111111111111111111ffeeeef11111111ff.........
    ........ff2222222222222222222eeeffffffff5555555555555555f111111111111ff1fffffffddddf1111111111111111111feeeeef1111111111f.........
    .......ff2222222222222222222eeeffbbbbf55555555555555555f1111111111111111111111fddddf111111111fffffff111feeeef11111111111f.........
    ......f2222222222222222222eeeefffffff555555555555555555f1111111111111111111111fd1111111ffffffeeeeeeff1ffeeeff11111111111f.........
    ......f222222222222222222eeeefccccc55555555555555555555f11111111111111111111111111111ffeeeeeeeeeeeeefffeeeef111111111111f.........
    .....ff22222222222222222eeeefcccff55555555555555555555f11111111111111111111111111111ffeeeeeeeeeeeeeeeeeeeeef111111111111f.........
    .....f222222222222222222eeefccccff55555555555555555555f11111111111111111111111111fffeeeeffffffeeeeeeeeeeeff111111111111ff.........
    ....f2222222222222222222eeffccccff5555555555555555555f111111111111111111111111111feeefff1111ffffffffffffff1111111111111f..........
    ....f222222222222222222feffccccccf5555555555555555555f11111111111111111111111111feeff11111111111fffff....fff11111111111f..........
    ...f22222222222222222.feefccccccccff55555555555555555f1111111111111111111111111feef1111111111111111ff......ff1111111111f..........
    ...f222222222222222ffffefccccccccccf55555555555555555111111111111111111111111ffeee11111111111111111f........ff11111111f...........
    ...f2222222222222fffcfeeefcccccccccff555555555555555f11111111111111111111111ffee1111111111111111111f.........ffffffffff...........
    ...f2222222222222f2ccfeeefccccccccccf555555555555555f111111111111111111111ffeee1111111111111111111f...............................
    ...f222222222222ff2ccfeeeefccccccccfff55555555555555f11111111111111111111feeefe1111111111111111111f...............................
    ...ff2222222222ffccccfeeeefcccffffffcf5555555555555511111111111111111111feeef111111111111111111111f...............................
    ..fff2222222ffffcccccfeeeefcfffccccfcf55555555555555111111111111111111ffeeef1111111111111111111111f...............................
    fffddff2222ff11ffcccccfeeeeffcccfffccf5555555555555511111111111111111feeeef1111111111111111111111f................................
    ddddddf2222f1111ffccccfeeeefcccccccccf555555555555551111111111111111feeeff11111111111111111111111f................................
    ddddddffdf1111111fccccfeeeeffccccccccf5555555555555111111111111111ffeeeeff1111111111111111111111ff................................
    dddddddddf1111111fcccccfeeeeffcccccccf555555555555511111111111111feeeeeef11111111111111111111111f.................................
    dddddddddf1111111fcccccffeeeefcccccccf55555555555551111111111111feeeeeef11111111111111111111111ff.................................
    ddfddddfdf11111111fcccccffeeefcccccccf5555555555555111111111111ffeeeeff111111111111111111111111f..................................
    ddfdddddff11111111fccccccffeeeffccccff555555555555511111111ffffeeeeeef111111111111111111111111ff..................................
    ddffddddff11111111fcccccccffeeeffcccf.5555555555555.11fffffeeeeeeeeff111111111111111111111111ff...................................
    dddfdddf1ff1111111ffcccccccfffeefffffffffffffffffffffffeeeeeeeeeeff11111111111111111111111111f....................................
    dddffddf11f11111111ffccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefff111111111111111111111111111f....................................
    ddddffdf11ff11111111fccccccccccffffeeeeeeeeeeeeeeeeeeeeeeeeffff111111111111111111111111111111f....................................
    dddddfdf111ff1111111ffcccccccccccccfffffeeeeeeeeeeeffffffff111111111111111111111111111111111f.....................................
    ffdddfdf1111ff1111111fccccccccccccccccccffffffffeff.1111111111111111111111111111111111111111f.....................................
    .fdddfdf11111ff111111ffccccccccccccccf55555555555555f111111111111111111111111111111111111111f.....................................
    ..fddfdff11111f1111111fccccccccccccccf55555555555555f111111111111111111111111111111111111111f.....................................
    ..fddfdff11111ff111111ffccccccccccccff55555555555555f11111111111111111111111111111111111111f......................................
    ..ffdfdf.f11111f1111111fccccccccccccff555555555555555f1111111111111f11111111111111111111111ff.....................................
    ...fdddf.ff1111ff111111ffcccccccccccff555555555555555f1111111111111f11111111111111111111111ff.....................................
    ....fdf...ff1111f1111111ffcccccccfffff5555555555555555f11111111111ff11111111111111111111111f......................................
    ....ff....ffff111f111111f.ffffffffbbbbf555555555555555f111111111fff.f111111111111111111111f.......................................
    ...........f...11f111111ffbbbbbbbbbbbbf555555555555555f1111111fff...f111111111111111111111f.......................................
    ................11111111ffbbbbbbbbbbbbbff4555555555555f1111fff.......f1111111111111111ff1ff.......................................
    ................111111111ffffffffbbbbbbfff45555555555555fff..........f11111111111111fff11f........................................
    .................f111111ffeeeeeeefffffffef44f55555555555.............ff111111111111ff111ff........................................
    .................f111111feeeeeeeeeeeeeeeeef4f55555555555.............ff11111111111ff11111f........................................
    .................f111111feeeeeeeeeeeeeeeeeff4f5555555555..............f111111111fff11111ff........................................
    .................f111111feeeeeeeeeeeeeeeeeef4f4555555555f.............f1111111111ff11111f.........................................
    .................f111111feeeeeeeeeeeeeffeeef4ff55555555555............f1111111111f111111f.........................................
    .................f111111feeeeeeeeeeeeefeeeeffbf55555555555............f1111111111f111111f.........................................
    .................f11111fffffeeeeeeeeffeeeeeefbf45555555555f...........f111111111ff11111ff.........................................
    .................f11111fbbbffeeeeeeffeeeeeeefbb45555555555ff..........f111111111f111111f..........................................
    .................f11111bbbbbbffeeeffeeeefffffbbbf5555555555f..........f111111111f111111f..........................................
    .................f11111fbbbbbbbffffffffffffbbbbbf55555555555..........f11111111ff111111f..........................................
    .................f11111fbbbbbbbbbbbbbbbbbbbbbbbbf55555555555f.........f11111111f1f11111f..........................................
    .................f11111fffbbbbbbbbbbbbbbbbbbbbbbf55555555555ff........f11111111f1f11111f..........................................
    .................f1111111fffffbbbbbbbbbbbbbbbbbff555555555555ff.......f1111111f11f1111f...........................................
    .................f111111111111ffffbbbbbbbbbbbbff45555555555555........f111111ff11f1111f...........................................
    .................1111111111111f44ffffffffffffff445555555555555........f111111f111f1111f...........................................
    .................f11111111111f.fff4444444ff4444445555555555555.......ff111111f111ff111f...........................................
    ..................f111111111f.....fffffffffffff445555555555555........ff11111f1111f111f...........................................
    ...................f11111111f.....f1111ffffffffffffffffffff............f11111f1111f111f...........................................
    ....................f11111111.....f1111f...............................f11111f1111f111f...........................................
    ....................f111111f......f111ff...............................f11111f1111f111f...........................................
    .....................f11111f......f111f................................ff1111f1111f111f...........................................
    ......................f1111f.....ff111f.................................f1111f1111f111f...........................................
    ......................f1111f.....f1111f.................................f1111f1111f111f...........................................
    ......................11111f.....f111f..................................f1111f1111f111f...........................................
    ......................f1111f.....f111f..................................f1111f1111f111f...........................................
    ......................f1111f.....f111f..................................f1111f1111f111f...........................................
    ......................f1111f.....f111f..................................f11111ff1f11111ff.........................................
    ......................f111f......1111f..................................f111111f1f111111fff.......................................
    ......................f111f......1111f..................................f111111111111111111ff.....................................
    ......................f111f......1111ff.................................f111111ffff111111111f.....................................
    ......................f111f......11111ffff..............................f111111ffff111111111f.....................................
    .......................111fff....1111111fff.............................f11111111ff11111111ff.....................................
    ......................f11111ff...f11111111f.............................f11111111ff11111111f......................................
    ......................f1f1111f...f11111111f.............................ffffff111f.ffffffff.......................................
    ......................f111111f...ff11111ff...................................fffff................................................
    .......................f11111f....ffffffff........................................................................................
    .......................fffffff....................................................................................................
    ..................................................................................................................................
    ..................................................................................................................................
    ..................................................................................................................................
    ..................................................................................................................................
    ..................................................................................................................................
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
