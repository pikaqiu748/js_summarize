Box-sizing用于定义用户该如何计算宽度和高度，属性值有两个：
content - box，默认值，其中设置的width 和height是只包含了内容的宽高（content）, 但不包含内边距（padding）、边框（border）、外边距（margin），既设置的width是只包含内容的，如果设置了padding是在这个盒子外部，height同理；
border - box 其中设置的width和height是包含内容（content）、和padding、border但是不包含margin, 既当设置了width和padding和border等值，内容实际上的宽度就是（width - padding和border的宽度），height同理