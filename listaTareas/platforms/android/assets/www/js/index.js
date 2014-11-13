/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var body = document.getElementById('body');
var menu = document.getElementById('menu');
var btnMenu = document.getElementById('btnMenu');
var wrapper = document.getElementById('wrapper');
var myScroll, myScrollMenu;
var btnChangeWindow = document.getElementById('changeWindow');
var menuShown = false;

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        body.className = 'page center';
        menu.className = 'page center';
        
        var heightBody = window.innerHeight - 46;
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '.cssClass { position: absolute; z-index: 2; left: 0; top: 46px; width: 100%; height: '+heightBody+'px; overflow: auto; }';
        wrapper.className = 'cssClass';
        document.getElementsByTagName('head')[0].appendChild(style);
        
        myScroll = new iScroll('wrapper', { hideScrollbar: true });
        myScrollMenu = new iScroll('wrapperMenu', { hideScrollbar: true });
        
        myScroll.refresh();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        btnMenu.addEventListener('click', this.showMenu, false);
        btnChangeWindow.addEventListener('click', this.changePage, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        new FastClick(document.body);
    },
    showMenu: function() {
        if(!menuShown){
            body.className = 'page right80 transition';
            menuShown = true;
        }else{
            body.className = 'page center transition';
            menuShown = false;
        }
    },
    changePage: function() {
        var xhReq = new XMLHttpRequest();
        xhReq.open('GET', 'windows/htmlchanged.html', false);
        xhReq.send(null);
        document.getElementById('bodyContainer').innerHTML = xhReq.responseText;
    }
};
