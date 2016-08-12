// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function padZero(minuteNum) {
    return (minuteNum < 10) ? "0" + minuteNum : String(minuteNum);
}

// loads the current time and displays it in the popup
document.addEventListener('DOMContentLoaded', function() {
    var currDate = new Date();
    var hours = currDate.getHours();
    var meridian = (hours < 12) ? "am" : "pm";
    hours = (hours === 0) ? 12 : hours;

    document.getElementById('time').textContent = "The time is now " +
        hours % 12 + ":" + padZero(currDate.getMinutes()) + " " + meridian;
});
