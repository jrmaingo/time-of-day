// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// loads the current time and displays it in the popup
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('time').textContent = new Date();
});
