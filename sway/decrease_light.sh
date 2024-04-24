#!/bin/bash
if (( $(echo "`light` - 10 <= 0"  | bc -l) )); then
	light -S 1
	exec swaynag -t warning -m 'The brightness is too low' 
else
	exec light -U 10
fi
