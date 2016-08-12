// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// loads the current time and displays it in the popup
document.addEventListener('DOMContentLoaded', function() {
    var currDate = new Date();
    var hours = currDate.getHours();
    var meridian = (hours < 12) ? "am" : "pm";

    document.getElementById('time').textContent = "The time is now " +
        hours % 12 + ":" + currDate.getMinutes() + " " + meridian;
});
