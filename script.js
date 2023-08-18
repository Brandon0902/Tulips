var tulip01 = new TimelineMax({paused: true, repeat: -1, repeatDelay:0.2, yoyo: true}),
    tulip02 = new TimelineMax({paused: true, repeat: -1, repeatDelay:0.2, yoyo: true}),
    tulip03 = new TimelineMax({paused: true, repeat: -1, repeatDelay:0.2, yoyo: true}),
    tulip04 = new TimelineMax({paused: true, repeat: -1, repeatDelay:0.2, yoyo: true}),
    main = new TimelineMax();


tulip01
  .to("#flower01", 3, {rotation: -20, transformOrigin:"bottom bottom", ease:Linear.easeNone}, 0)
  .to(".stemStart1",3, {morphSVG:".stemEnd1", ease:Linear.easeNone},0)
  .to("#leftleaf01", 3, {rotation: 5, transformOrigin:"bottom bottom", ease:Linear.easeNone}, 0)
  .to("#rightleaf01", 3, {rotation: 5, transformOrigin:"bottom bottom", ease:Linear.easeNone}, 0);

tulip02
  .to("#flower02", 2, {rotation: -20, transformOrigin:"bottom bottom", ease:Linear.easeNone}, 0)
  .to(".stemStart2",2, {morphSVG:".stemEnd2", ease:Linear.easeNone},0)
  .to("#leftleaf02", 2, {rotation: 5, transformOrigin:"bottom bottom", ease:Linear.easeNone}, 0)
  .to("#rightleaf02", 2, {rotation: 5, transformOrigin:"bottom bottom", ease:Linear.easeNone}, 0);

tulip03
  .to("#flower03", 2.5, {rotation: -20, transformOrigin:"bottom bottom", ease:Linear.easeNone}, 0)
  .to(".stemStart3",2.5, {morphSVG:".stemEnd3", ease:Linear.easeNone},0)
  .to("#leftleaf03", 2.5, {rotation: 5, transformOrigin:"bottom bottom", ease:Linear.easeNone}, 0)
  .to("#rightleaf03", 2.5, {rotation: 5, transformOrigin:"bottom bottom", ease:Linear.easeNone}, 0);

tulip04
  .to("#flower04", 3, {rotation: -20, transformOrigin:"bottom bottom", ease:Linear.easeNone}, 0)
  .to(".stemStart4",3, {morphSVG:".stemEnd4", ease:Linear.easeNone},0)
  .to("#leftleaf04", 3, {rotation: 5, transformOrigin:"bottom bottom", ease:Linear.easeNone}, 0)
  .to("#rightleaf04", 3, {rotation: 5, transformOrigin:"bottom bottom", ease:Linear.easeNone}, 0);

main
  .add(tulip01.play(), 0)
  .add(tulip02.play(), 1)
  .add(tulip03.play(), 4)
  .add(tulip04.play(), 2);