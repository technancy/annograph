hashOut.io
============

A text analyser for quanitifing subjective values within texts.
Key values within a text can be mapped by assigning a key value against a sentence or selected words.
Each key value is selected from a pool of set criteria.


For example:

Set criteria: Hot, Toasty, Cold

George went on holiday to Dubai in July. [ Hot ] He decided to sit in a bath of ice the whole time. [ Cold ] When he got home it was snowing. [ Cold ] But luckily he was wearing 10 woolen onesies. [ Toasty ] His housemate Gregory had cooked him a welcome home meal with 10 ghost peppers. [ Hot ]

[ Hot ] - 2
[ Toasty ] - 1
[ Cold ] - 2


Extention:
The tally of results can then be displayed as a graph.
But this tool would become even more useful if you could compare 1 text against another.
Opinion vs Opinion


For example:

Set criteria: Economy, Environment, Equality

Opinion A:
George went on holiday to Dubai in July. [ Economy ] Random sentence that has no meaning.  When he got home it was snowing. [ Equality ] But luckily he was wearing 10 woolen onesies. [ Environment ] His housemate Gregory had cooked him a welcome home meal with 10 ghost peppers. [ Equality ]

Opinion B:
George went on holiday to Dubai in July. [ Economy ] Random sentence that has no meaning.  When he got home it was snowing. [ Equality ] But luckily he was wearing 10 woolen onesies. [ Environment ] His housemate Gregory had cooked him a welcome home meal with 10 ghost peppers. [ Equality ]


   2 -- [ Hot ][ Hot ] - 1
 1 - [ Toasty ][ Toasty ] - 1
 3 --- [ Cold ][ Cold ] -- 2