#!/bin/bash
pkill -SIGINT ambi
sleep 1
screen -d -m /usr/sbin/ambi-tv -f /etc/ambi-tv-avg.conf &
