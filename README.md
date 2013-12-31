hashOut
============

A text analyser for quanitifing subjective values within texts.
Key values within a text can be mapped by assigning one against each sentence or selected words.
Each key value is selected from a pool of set criteria.

Extension:
The tally of results can then be displayed as a graph.
But this tool would become even more useful if you could compare 1 text against another.
Opinion vs Opinion


"A highlighter you can make graphs with."


For example:

Set criteria: Hot, Toasty, Cold

George went on holiday to Dubai in July. [ Hot ] He decided to sit in a bath of ice the whole time. [ Cold ] When he got home it was snowing. [ Cold ] But luckily he was wearing 10 woolen onesies. [ Toasty ] His housemate Gregory had cooked him a welcome home meal with 10 ghost peppers. [ Hot ]

[ Hot ] => 2 ##
[ Toasty ] => 1 #
[ Cold ] => 2 #



Extension example:

Set criteria: Economy, Equality, Independance

Opinion A:
The unconditional income in Switzerland means that a third of the GDP would be distributed unconditionally. [ Equality ] But I don’t count that as government expenditure because it is immediately distributed to the people who live in this society. [ Economy ] It means less government power because each individual can decide how to spend the money. [ Independance ]

Opinion B:
Under unconditional income landlords could raise rent levels to double. [ Economy - ] [ Equality - ] Some buracracy would be eliminated but there would need to be measures put in place to limit rent prices. [ Independance - ] Pilot study results need to be looked at carefully. There is a risk that although people would feel more independance they may have less incentive to do any work at all, and so the Swiss economy would suffer in the long term. [ Economy - ]


 	    # 1 <= [ Economy ][ Economy ] => -2 ##
 	   # 1 <= [ Equality ][ Equality ] => -1 #
   # 1 <= [ Independance ][ Independance ] => -1 #