/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 168.0, "minX": 0.0, "maxY": 6281.0, "series": [{"data": [[0.0, 168.0], [0.1, 172.0], [0.2, 173.0], [0.3, 174.0], [0.4, 175.0], [0.5, 175.0], [0.6, 175.0], [0.7, 175.0], [0.8, 176.0], [0.9, 176.0], [1.0, 177.0], [1.1, 177.0], [1.2, 178.0], [1.3, 178.0], [1.4, 178.0], [1.5, 178.0], [1.6, 179.0], [1.7, 179.0], [1.8, 179.0], [1.9, 179.0], [2.0, 179.0], [2.1, 179.0], [2.2, 179.0], [2.3, 179.0], [2.4, 180.0], [2.5, 180.0], [2.6, 180.0], [2.7, 180.0], [2.8, 180.0], [2.9, 180.0], [3.0, 180.0], [3.1, 180.0], [3.2, 180.0], [3.3, 180.0], [3.4, 180.0], [3.5, 180.0], [3.6, 180.0], [3.7, 181.0], [3.8, 181.0], [3.9, 181.0], [4.0, 181.0], [4.1, 181.0], [4.2, 181.0], [4.3, 181.0], [4.4, 181.0], [4.5, 181.0], [4.6, 182.0], [4.7, 182.0], [4.8, 182.0], [4.9, 182.0], [5.0, 182.0], [5.1, 182.0], [5.2, 182.0], [5.3, 183.0], [5.4, 183.0], [5.5, 183.0], [5.6, 183.0], [5.7, 183.0], [5.8, 183.0], [5.9, 183.0], [6.0, 183.0], [6.1, 183.0], [6.2, 183.0], [6.3, 183.0], [6.4, 183.0], [6.5, 184.0], [6.6, 184.0], [6.7, 184.0], [6.8, 184.0], [6.9, 184.0], [7.0, 184.0], [7.1, 184.0], [7.2, 184.0], [7.3, 184.0], [7.4, 184.0], [7.5, 184.0], [7.6, 184.0], [7.7, 184.0], [7.8, 184.0], [7.9, 184.0], [8.0, 184.0], [8.1, 184.0], [8.2, 184.0], [8.3, 184.0], [8.4, 184.0], [8.5, 184.0], [8.6, 184.0], [8.7, 184.0], [8.8, 185.0], [8.9, 185.0], [9.0, 185.0], [9.1, 185.0], [9.2, 185.0], [9.3, 185.0], [9.4, 185.0], [9.5, 185.0], [9.6, 185.0], [9.7, 185.0], [9.8, 185.0], [9.9, 185.0], [10.0, 185.0], [10.1, 185.0], [10.2, 185.0], [10.3, 185.0], [10.4, 185.0], [10.5, 185.0], [10.6, 185.0], [10.7, 185.0], [10.8, 185.0], [10.9, 185.0], [11.0, 185.0], [11.1, 185.0], [11.2, 185.0], [11.3, 185.0], [11.4, 185.0], [11.5, 185.0], [11.6, 185.0], [11.7, 186.0], [11.8, 186.0], [11.9, 186.0], [12.0, 186.0], [12.1, 186.0], [12.2, 186.0], [12.3, 186.0], [12.4, 186.0], [12.5, 186.0], [12.6, 186.0], [12.7, 186.0], [12.8, 186.0], [12.9, 186.0], [13.0, 186.0], [13.1, 186.0], [13.2, 186.0], [13.3, 186.0], [13.4, 186.0], [13.5, 186.0], [13.6, 186.0], [13.7, 186.0], [13.8, 187.0], [13.9, 187.0], [14.0, 187.0], [14.1, 187.0], [14.2, 187.0], [14.3, 187.0], [14.4, 187.0], [14.5, 187.0], [14.6, 187.0], [14.7, 187.0], [14.8, 187.0], [14.9, 187.0], [15.0, 187.0], [15.1, 187.0], [15.2, 187.0], [15.3, 187.0], [15.4, 188.0], [15.5, 188.0], [15.6, 188.0], [15.7, 188.0], [15.8, 188.0], [15.9, 188.0], [16.0, 188.0], [16.1, 188.0], [16.2, 188.0], [16.3, 188.0], [16.4, 188.0], [16.5, 188.0], [16.6, 188.0], [16.7, 188.0], [16.8, 188.0], [16.9, 188.0], [17.0, 188.0], [17.1, 188.0], [17.2, 188.0], [17.3, 188.0], [17.4, 189.0], [17.5, 189.0], [17.6, 189.0], [17.7, 189.0], [17.8, 189.0], [17.9, 189.0], [18.0, 189.0], [18.1, 189.0], [18.2, 189.0], [18.3, 189.0], [18.4, 189.0], [18.5, 189.0], [18.6, 189.0], [18.7, 189.0], [18.8, 189.0], [18.9, 189.0], [19.0, 189.0], [19.1, 189.0], [19.2, 189.0], [19.3, 189.0], [19.4, 189.0], [19.5, 189.0], [19.6, 189.0], [19.7, 189.0], [19.8, 189.0], [19.9, 189.0], [20.0, 189.0], [20.1, 189.0], [20.2, 189.0], [20.3, 190.0], [20.4, 190.0], [20.5, 190.0], [20.6, 190.0], [20.7, 190.0], [20.8, 190.0], [20.9, 190.0], [21.0, 190.0], [21.1, 190.0], [21.2, 190.0], [21.3, 190.0], [21.4, 190.0], [21.5, 190.0], [21.6, 190.0], [21.7, 190.0], [21.8, 190.0], [21.9, 190.0], [22.0, 190.0], [22.1, 190.0], [22.2, 190.0], [22.3, 190.0], [22.4, 190.0], [22.5, 190.0], [22.6, 190.0], [22.7, 190.0], [22.8, 190.0], [22.9, 190.0], [23.0, 190.0], [23.1, 190.0], [23.2, 190.0], [23.3, 190.0], [23.4, 190.0], [23.5, 190.0], [23.6, 190.0], [23.7, 190.0], [23.8, 191.0], [23.9, 191.0], [24.0, 191.0], [24.1, 191.0], [24.2, 191.0], [24.3, 191.0], [24.4, 191.0], [24.5, 191.0], [24.6, 191.0], [24.7, 191.0], [24.8, 191.0], [24.9, 191.0], [25.0, 191.0], [25.1, 191.0], [25.2, 191.0], [25.3, 191.0], [25.4, 191.0], [25.5, 191.0], [25.6, 191.0], [25.7, 191.0], [25.8, 191.0], [25.9, 191.0], [26.0, 191.0], [26.1, 191.0], [26.2, 191.0], [26.3, 191.0], [26.4, 191.0], [26.5, 192.0], [26.6, 192.0], [26.7, 192.0], [26.8, 192.0], [26.9, 192.0], [27.0, 192.0], [27.1, 192.0], [27.2, 192.0], [27.3, 192.0], [27.4, 192.0], [27.5, 192.0], [27.6, 192.0], [27.7, 192.0], [27.8, 192.0], [27.9, 192.0], [28.0, 192.0], [28.1, 192.0], [28.2, 192.0], [28.3, 192.0], [28.4, 193.0], [28.5, 193.0], [28.6, 193.0], [28.7, 193.0], [28.8, 193.0], [28.9, 193.0], [29.0, 193.0], [29.1, 193.0], [29.2, 193.0], [29.3, 193.0], [29.4, 193.0], [29.5, 193.0], [29.6, 193.0], [29.7, 193.0], [29.8, 193.0], [29.9, 193.0], [30.0, 193.0], [30.1, 193.0], [30.2, 193.0], [30.3, 193.0], [30.4, 193.0], [30.5, 193.0], [30.6, 194.0], [30.7, 194.0], [30.8, 194.0], [30.9, 194.0], [31.0, 194.0], [31.1, 194.0], [31.2, 194.0], [31.3, 194.0], [31.4, 194.0], [31.5, 194.0], [31.6, 194.0], [31.7, 194.0], [31.8, 194.0], [31.9, 194.0], [32.0, 194.0], [32.1, 194.0], [32.2, 194.0], [32.3, 194.0], [32.4, 194.0], [32.5, 194.0], [32.6, 194.0], [32.7, 194.0], [32.8, 194.0], [32.9, 194.0], [33.0, 194.0], [33.1, 194.0], [33.2, 194.0], [33.3, 195.0], [33.4, 195.0], [33.5, 195.0], [33.6, 195.0], [33.7, 195.0], [33.8, 195.0], [33.9, 195.0], [34.0, 195.0], [34.1, 195.0], [34.2, 195.0], [34.3, 195.0], [34.4, 195.0], [34.5, 195.0], [34.6, 195.0], [34.7, 195.0], [34.8, 195.0], [34.9, 195.0], [35.0, 195.0], [35.1, 195.0], [35.2, 195.0], [35.3, 195.0], [35.4, 195.0], [35.5, 195.0], [35.6, 195.0], [35.7, 195.0], [35.8, 195.0], [35.9, 195.0], [36.0, 195.0], [36.1, 195.0], [36.2, 195.0], [36.3, 195.0], [36.4, 195.0], [36.5, 195.0], [36.6, 196.0], [36.7, 196.0], [36.8, 196.0], [36.9, 196.0], [37.0, 196.0], [37.1, 196.0], [37.2, 196.0], [37.3, 196.0], [37.4, 196.0], [37.5, 196.0], [37.6, 196.0], [37.7, 196.0], [37.8, 196.0], [37.9, 196.0], [38.0, 196.0], [38.1, 196.0], [38.2, 196.0], [38.3, 196.0], [38.4, 196.0], [38.5, 196.0], [38.6, 196.0], [38.7, 196.0], [38.8, 196.0], [38.9, 197.0], [39.0, 197.0], [39.1, 197.0], [39.2, 197.0], [39.3, 197.0], [39.4, 197.0], [39.5, 197.0], [39.6, 197.0], [39.7, 197.0], [39.8, 197.0], [39.9, 197.0], [40.0, 197.0], [40.1, 197.0], [40.2, 197.0], [40.3, 197.0], [40.4, 197.0], [40.5, 197.0], [40.6, 197.0], [40.7, 197.0], [40.8, 197.0], [40.9, 197.0], [41.0, 197.0], [41.1, 198.0], [41.2, 198.0], [41.3, 198.0], [41.4, 198.0], [41.5, 198.0], [41.6, 198.0], [41.7, 198.0], [41.8, 198.0], [41.9, 198.0], [42.0, 198.0], [42.1, 198.0], [42.2, 198.0], [42.3, 198.0], [42.4, 198.0], [42.5, 198.0], [42.6, 198.0], [42.7, 198.0], [42.8, 198.0], [42.9, 198.0], [43.0, 198.0], [43.1, 199.0], [43.2, 199.0], [43.3, 199.0], [43.4, 199.0], [43.5, 199.0], [43.6, 199.0], [43.7, 199.0], [43.8, 199.0], [43.9, 199.0], [44.0, 199.0], [44.1, 199.0], [44.2, 199.0], [44.3, 199.0], [44.4, 199.0], [44.5, 199.0], [44.6, 199.0], [44.7, 199.0], [44.8, 199.0], [44.9, 199.0], [45.0, 199.0], [45.1, 199.0], [45.2, 199.0], [45.3, 199.0], [45.4, 200.0], [45.5, 200.0], [45.6, 200.0], [45.7, 200.0], [45.8, 200.0], [45.9, 200.0], [46.0, 200.0], [46.1, 200.0], [46.2, 200.0], [46.3, 200.0], [46.4, 200.0], [46.5, 200.0], [46.6, 200.0], [46.7, 200.0], [46.8, 200.0], [46.9, 200.0], [47.0, 200.0], [47.1, 200.0], [47.2, 200.0], [47.3, 200.0], [47.4, 200.0], [47.5, 200.0], [47.6, 200.0], [47.7, 200.0], [47.8, 200.0], [47.9, 200.0], [48.0, 200.0], [48.1, 201.0], [48.2, 201.0], [48.3, 201.0], [48.4, 201.0], [48.5, 201.0], [48.6, 201.0], [48.7, 201.0], [48.8, 201.0], [48.9, 201.0], [49.0, 201.0], [49.1, 201.0], [49.2, 201.0], [49.3, 201.0], [49.4, 201.0], [49.5, 201.0], [49.6, 201.0], [49.7, 201.0], [49.8, 201.0], [49.9, 201.0], [50.0, 201.0], [50.1, 201.0], [50.2, 201.0], [50.3, 201.0], [50.4, 201.0], [50.5, 202.0], [50.6, 202.0], [50.7, 202.0], [50.8, 202.0], [50.9, 202.0], [51.0, 202.0], [51.1, 202.0], [51.2, 202.0], [51.3, 202.0], [51.4, 202.0], [51.5, 202.0], [51.6, 202.0], [51.7, 202.0], [51.8, 202.0], [51.9, 202.0], [52.0, 202.0], [52.1, 203.0], [52.2, 203.0], [52.3, 203.0], [52.4, 203.0], [52.5, 203.0], [52.6, 203.0], [52.7, 203.0], [52.8, 203.0], [52.9, 203.0], [53.0, 203.0], [53.1, 203.0], [53.2, 203.0], [53.3, 203.0], [53.4, 203.0], [53.5, 203.0], [53.6, 203.0], [53.7, 203.0], [53.8, 204.0], [53.9, 204.0], [54.0, 204.0], [54.1, 204.0], [54.2, 204.0], [54.3, 204.0], [54.4, 204.0], [54.5, 204.0], [54.6, 204.0], [54.7, 204.0], [54.8, 204.0], [54.9, 204.0], [55.0, 204.0], [55.1, 204.0], [55.2, 204.0], [55.3, 204.0], [55.4, 204.0], [55.5, 204.0], [55.6, 204.0], [55.7, 204.0], [55.8, 204.0], [55.9, 204.0], [56.0, 205.0], [56.1, 205.0], [56.2, 205.0], [56.3, 205.0], [56.4, 205.0], [56.5, 205.0], [56.6, 205.0], [56.7, 205.0], [56.8, 205.0], [56.9, 205.0], [57.0, 205.0], [57.1, 205.0], [57.2, 205.0], [57.3, 205.0], [57.4, 205.0], [57.5, 205.0], [57.6, 205.0], [57.7, 205.0], [57.8, 205.0], [57.9, 205.0], [58.0, 205.0], [58.1, 205.0], [58.2, 205.0], [58.3, 205.0], [58.4, 206.0], [58.5, 206.0], [58.6, 206.0], [58.7, 206.0], [58.8, 206.0], [58.9, 206.0], [59.0, 206.0], [59.1, 206.0], [59.2, 206.0], [59.3, 206.0], [59.4, 206.0], [59.5, 206.0], [59.6, 206.0], [59.7, 206.0], [59.8, 206.0], [59.9, 206.0], [60.0, 206.0], [60.1, 206.0], [60.2, 206.0], [60.3, 206.0], [60.4, 207.0], [60.5, 207.0], [60.6, 207.0], [60.7, 207.0], [60.8, 207.0], [60.9, 207.0], [61.0, 207.0], [61.1, 207.0], [61.2, 207.0], [61.3, 207.0], [61.4, 207.0], [61.5, 207.0], [61.6, 207.0], [61.7, 207.0], [61.8, 208.0], [61.9, 208.0], [62.0, 208.0], [62.1, 208.0], [62.2, 208.0], [62.3, 208.0], [62.4, 208.0], [62.5, 208.0], [62.6, 208.0], [62.7, 208.0], [62.8, 208.0], [62.9, 208.0], [63.0, 208.0], [63.1, 208.0], [63.2, 208.0], [63.3, 209.0], [63.4, 209.0], [63.5, 209.0], [63.6, 209.0], [63.7, 209.0], [63.8, 209.0], [63.9, 209.0], [64.0, 209.0], [64.1, 209.0], [64.2, 209.0], [64.3, 209.0], [64.4, 209.0], [64.5, 209.0], [64.6, 209.0], [64.7, 209.0], [64.8, 209.0], [64.9, 210.0], [65.0, 210.0], [65.1, 210.0], [65.2, 210.0], [65.3, 210.0], [65.4, 210.0], [65.5, 210.0], [65.6, 210.0], [65.7, 210.0], [65.8, 210.0], [65.9, 210.0], [66.0, 210.0], [66.1, 210.0], [66.2, 210.0], [66.3, 210.0], [66.4, 210.0], [66.5, 210.0], [66.6, 210.0], [66.7, 211.0], [66.8, 211.0], [66.9, 211.0], [67.0, 211.0], [67.1, 211.0], [67.2, 211.0], [67.3, 211.0], [67.4, 211.0], [67.5, 211.0], [67.6, 211.0], [67.7, 211.0], [67.8, 211.0], [67.9, 211.0], [68.0, 211.0], [68.1, 211.0], [68.2, 211.0], [68.3, 212.0], [68.4, 212.0], [68.5, 212.0], [68.6, 212.0], [68.7, 212.0], [68.8, 212.0], [68.9, 212.0], [69.0, 212.0], [69.1, 212.0], [69.2, 213.0], [69.3, 213.0], [69.4, 213.0], [69.5, 213.0], [69.6, 213.0], [69.7, 213.0], [69.8, 213.0], [69.9, 213.0], [70.0, 213.0], [70.1, 214.0], [70.2, 214.0], [70.3, 214.0], [70.4, 214.0], [70.5, 214.0], [70.6, 214.0], [70.7, 214.0], [70.8, 214.0], [70.9, 214.0], [71.0, 214.0], [71.1, 214.0], [71.2, 214.0], [71.3, 215.0], [71.4, 215.0], [71.5, 215.0], [71.6, 215.0], [71.7, 215.0], [71.8, 215.0], [71.9, 215.0], [72.0, 215.0], [72.1, 215.0], [72.2, 215.0], [72.3, 215.0], [72.4, 215.0], [72.5, 216.0], [72.6, 216.0], [72.7, 216.0], [72.8, 216.0], [72.9, 216.0], [73.0, 216.0], [73.1, 216.0], [73.2, 216.0], [73.3, 216.0], [73.4, 216.0], [73.5, 216.0], [73.6, 217.0], [73.7, 217.0], [73.8, 217.0], [73.9, 217.0], [74.0, 217.0], [74.1, 217.0], [74.2, 217.0], [74.3, 218.0], [74.4, 218.0], [74.5, 218.0], [74.6, 218.0], [74.7, 218.0], [74.8, 218.0], [74.9, 218.0], [75.0, 219.0], [75.1, 219.0], [75.2, 219.0], [75.3, 219.0], [75.4, 219.0], [75.5, 219.0], [75.6, 219.0], [75.7, 219.0], [75.8, 220.0], [75.9, 220.0], [76.0, 220.0], [76.1, 220.0], [76.2, 220.0], [76.3, 220.0], [76.4, 220.0], [76.5, 220.0], [76.6, 220.0], [76.7, 221.0], [76.8, 221.0], [76.9, 221.0], [77.0, 221.0], [77.1, 221.0], [77.2, 221.0], [77.3, 221.0], [77.4, 221.0], [77.5, 221.0], [77.6, 221.0], [77.7, 221.0], [77.8, 222.0], [77.9, 222.0], [78.0, 222.0], [78.1, 222.0], [78.2, 222.0], [78.3, 222.0], [78.4, 222.0], [78.5, 222.0], [78.6, 223.0], [78.7, 223.0], [78.8, 223.0], [78.9, 223.0], [79.0, 223.0], [79.1, 224.0], [79.2, 224.0], [79.3, 224.0], [79.4, 224.0], [79.5, 224.0], [79.6, 224.0], [79.7, 225.0], [79.8, 225.0], [79.9, 225.0], [80.0, 225.0], [80.1, 225.0], [80.2, 225.0], [80.3, 226.0], [80.4, 226.0], [80.5, 226.0], [80.6, 226.0], [80.7, 226.0], [80.8, 226.0], [80.9, 227.0], [81.0, 227.0], [81.1, 227.0], [81.2, 227.0], [81.3, 227.0], [81.4, 227.0], [81.5, 227.0], [81.6, 228.0], [81.7, 228.0], [81.8, 228.0], [81.9, 228.0], [82.0, 229.0], [82.1, 229.0], [82.2, 229.0], [82.3, 229.0], [82.4, 230.0], [82.5, 230.0], [82.6, 230.0], [82.7, 230.0], [82.8, 230.0], [82.9, 230.0], [83.0, 230.0], [83.1, 231.0], [83.2, 231.0], [83.3, 231.0], [83.4, 231.0], [83.5, 231.0], [83.6, 232.0], [83.7, 232.0], [83.8, 232.0], [83.9, 232.0], [84.0, 233.0], [84.1, 233.0], [84.2, 233.0], [84.3, 233.0], [84.4, 234.0], [84.5, 234.0], [84.6, 234.0], [84.7, 234.0], [84.8, 235.0], [84.9, 235.0], [85.0, 235.0], [85.1, 235.0], [85.2, 235.0], [85.3, 236.0], [85.4, 236.0], [85.5, 236.0], [85.6, 236.0], [85.7, 237.0], [85.8, 237.0], [85.9, 237.0], [86.0, 238.0], [86.1, 238.0], [86.2, 238.0], [86.3, 238.0], [86.4, 239.0], [86.5, 239.0], [86.6, 240.0], [86.7, 240.0], [86.8, 240.0], [86.9, 241.0], [87.0, 241.0], [87.1, 241.0], [87.2, 241.0], [87.3, 242.0], [87.4, 242.0], [87.5, 242.0], [87.6, 243.0], [87.7, 243.0], [87.8, 244.0], [87.9, 244.0], [88.0, 244.0], [88.1, 245.0], [88.2, 245.0], [88.3, 245.0], [88.4, 246.0], [88.5, 246.0], [88.6, 246.0], [88.7, 247.0], [88.8, 247.0], [88.9, 248.0], [89.0, 249.0], [89.1, 249.0], [89.2, 250.0], [89.3, 250.0], [89.4, 250.0], [89.5, 251.0], [89.6, 251.0], [89.7, 252.0], [89.8, 252.0], [89.9, 253.0], [90.0, 254.0], [90.1, 254.0], [90.2, 255.0], [90.3, 255.0], [90.4, 256.0], [90.5, 256.0], [90.6, 257.0], [90.7, 259.0], [90.8, 259.0], [90.9, 260.0], [91.0, 260.0], [91.1, 260.0], [91.2, 261.0], [91.3, 262.0], [91.4, 263.0], [91.5, 264.0], [91.6, 265.0], [91.7, 265.0], [91.8, 266.0], [91.9, 267.0], [92.0, 267.0], [92.1, 268.0], [92.2, 269.0], [92.3, 270.0], [92.4, 272.0], [92.5, 273.0], [92.6, 275.0], [92.7, 276.0], [92.8, 278.0], [92.9, 279.0], [93.0, 281.0], [93.1, 282.0], [93.2, 283.0], [93.3, 285.0], [93.4, 286.0], [93.5, 289.0], [93.6, 293.0], [93.7, 297.0], [93.8, 299.0], [93.9, 300.0], [94.0, 301.0], [94.1, 303.0], [94.2, 306.0], [94.3, 307.0], [94.4, 309.0], [94.5, 311.0], [94.6, 315.0], [94.7, 319.0], [94.8, 325.0], [94.9, 329.0], [95.0, 334.0], [95.1, 336.0], [95.2, 339.0], [95.3, 341.0], [95.4, 351.0], [95.5, 359.0], [95.6, 368.0], [95.7, 372.0], [95.8, 382.0], [95.9, 398.0], [96.0, 402.0], [96.1, 415.0], [96.2, 423.0], [96.3, 495.0], [96.4, 590.0], [96.5, 599.0], [96.6, 605.0], [96.7, 609.0], [96.8, 611.0], [96.9, 614.0], [97.0, 616.0], [97.1, 618.0], [97.2, 620.0], [97.3, 623.0], [97.4, 625.0], [97.5, 627.0], [97.6, 631.0], [97.7, 632.0], [97.8, 635.0], [97.9, 638.0], [98.0, 643.0], [98.1, 650.0], [98.2, 657.0], [98.3, 669.0], [98.4, 691.0], [98.5, 740.0], [98.6, 754.0], [98.7, 771.0], [98.8, 805.0], [98.9, 850.0], [99.0, 1018.0], [99.1, 1045.0], [99.2, 1092.0], [99.3, 1224.0], [99.4, 1517.0], [99.5, 1945.0], [99.6, 5191.0], [99.7, 5214.0], [99.8, 6213.0], [99.9, 6241.0], [100.0, 6281.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 10554.0, "series": [{"data": [[600.0, 416.0], [700.0, 79.0], [800.0, 37.0], [200.0, 10554.0], [900.0, 5.0], [1000.0, 54.0], [1100.0, 11.0], [1200.0, 12.0], [300.0, 464.0], [5100.0, 28.0], [1300.0, 1.0], [5200.0, 13.0], [1400.0, 11.0], [1500.0, 10.0], [6100.0, 8.0], [6000.0, 1.0], [6200.0, 51.0], [100.0, 9890.0], [400.0, 81.0], [1700.0, 1.0], [1800.0, 12.0], [1900.0, 11.0], [500.0, 44.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 11.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 20978.0, "series": [{"data": [[0.0, 20978.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 671.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 134.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 11.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 94.30661339680378, "minX": 1.76392446E12, "maxY": 99.54017946161518, "series": [{"data": [[1.76392446E12, 94.30661339680378], [1.76392452E12, 99.54017946161518]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76392452E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 187.16666666666666, "minX": 2.0, "maxY": 1177.7, "series": [{"data": [[2.0, 212.5], [6.0, 197.25], [13.0, 190.0], [14.0, 217.66666666666666], [17.0, 1177.7], [18.0, 753.0], [19.0, 233.83333333333331], [20.0, 318.25], [21.0, 229.47058823529412], [22.0, 253.375], [23.0, 238.60000000000002], [24.0, 236.63636363636363], [25.0, 251.44444444444446], [26.0, 229.9230769230769], [27.0, 255.66666666666666], [28.0, 221.93333333333334], [29.0, 244.60000000000002], [30.0, 230.0], [31.0, 228.92307692307693], [32.0, 218.72222222222223], [33.0, 258.625], [34.0, 223.54999999999998], [35.0, 247.22222222222223], [36.0, 220.45000000000002], [37.0, 239.53846153846152], [38.0, 212.6], [39.0, 232.92307692307693], [40.0, 217.7931034482759], [41.0, 237.66666666666666], [42.0, 216.04166666666666], [43.0, 187.16666666666666], [44.0, 235.99999999999997], [45.0, 233.6], [46.0, 221.08333333333337], [47.0, 220.36363636363635], [48.0, 212.53333333333333], [49.0, 255.0625], [50.0, 242.64285714285714], [51.0, 256.0], [52.0, 199.2222222222222], [53.0, 265.73333333333335], [54.0, 231.74193548387103], [55.0, 213.12903225806448], [56.0, 223.04999999999998], [57.0, 195.6875], [58.0, 248.0967741935484], [59.0, 268.59090909090907], [60.0, 237.47058823529414], [61.0, 223.5909090909091], [62.0, 192.06249999999997], [63.0, 216.37037037037035], [64.0, 213.4193548387097], [65.0, 235.13157894736847], [66.0, 216.87500000000006], [67.0, 207.17857142857144], [68.0, 210.2727272727273], [69.0, 204.725], [70.0, 223.62857142857146], [71.0, 194.28571428571428], [72.0, 234.2258064516129], [73.0, 218.925], [74.0, 218.74074074074073], [75.0, 202.78571428571428], [76.0, 213.44444444444446], [77.0, 205.30769230769235], [78.0, 240.5769230769231], [79.0, 200.36170212765958], [80.0, 211.96969696969694], [81.0, 202.21739130434784], [82.0, 190.0], [83.0, 221.8604651162791], [84.0, 215.625], [85.0, 201.2941176470588], [86.0, 203.71052631578948], [87.0, 222.11111111111111], [88.0, 209.00000000000003], [89.0, 204.25000000000003], [90.0, 205.12499999999997], [91.0, 212.43478260869563], [92.0, 211.1282051282051], [93.0, 202.804347826087], [94.0, 209.02000000000004], [95.0, 220.07894736842107], [96.0, 205.12962962962962], [97.0, 223.29787234042553], [98.0, 204.72131147540983], [99.0, 214.03030303030303], [100.0, 256.5910091649172]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[96.71519684316803, 253.06143892814626]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 77899.66666666667, "minX": 1.76392446E12, "maxY": 184875.6, "series": [{"data": [[1.76392446E12, 184875.6], [1.76392452E12, 157500.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76392446E12, 91367.06666666667], [1.76392452E12, 77899.66666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76392452E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 226.6521435692926, "minX": 1.76392446E12, "maxY": 275.5780346820824, "series": [{"data": [[1.76392446E12, 275.5780346820824], [1.76392452E12, 226.6521435692926]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76392452E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 226.65024925224301, "minX": 1.76392446E12, "maxY": 275.5728493709638, "series": [{"data": [[1.76392446E12, 275.5728493709638], [1.76392452E12, 226.65024925224301]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76392452E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.76392446E12, "maxY": 5.243709622577342, "series": [{"data": [[1.76392446E12, 5.243709622577342], [1.76392452E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76392452E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 168.0, "minX": 1.76392446E12, "maxY": 6281.0, "series": [{"data": [[1.76392446E12, 6281.0], [1.76392452E12, 6085.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76392446E12, 243.0], [1.76392452E12, 262.89999999999964]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76392446E12, 1834.759999999951], [1.76392452E12, 621.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76392446E12, 599.0], [1.76392452E12, 320.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.76392446E12, 168.0], [1.76392452E12, 170.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76392446E12, 198.0], [1.76392452E12, 206.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76392452E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 189.0, "minX": 9.0, "maxY": 5192.0, "series": [{"data": [[517.0, 195.0], [514.0, 192.0], [9.0, 1236.0], [36.0, 5192.0], [79.0, 189.0], [132.0, 191.0], [180.0, 191.0], [211.0, 205.0], [268.0, 199.5], [262.0, 219.0], [273.0, 199.0], [300.0, 201.0], [306.0, 211.0], [316.0, 194.0], [320.0, 221.0], [341.0, 192.0], [353.0, 230.0], [365.0, 198.0], [354.0, 197.0], [376.0, 225.0], [379.0, 202.0], [370.0, 235.0], [382.0, 235.5], [396.0, 201.0], [391.0, 198.0], [390.0, 195.0], [407.0, 200.0], [405.0, 198.0], [403.0, 214.0], [426.0, 195.0], [418.0, 201.0], [431.0, 216.0], [438.0, 218.0], [443.0, 212.0], [435.0, 235.0], [460.0, 211.0], [471.0, 205.0], [472.0, 198.0], [467.0, 206.0], [480.0, 198.0], [484.0, 202.0], [491.0, 194.0], [487.0, 203.0], [488.0, 205.0], [508.0, 196.0], [499.0, 197.0], [509.0, 192.5], [510.0, 201.0], [504.0, 200.0], [497.0, 200.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[391.0, 209.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 517.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 189.0, "minX": 9.0, "maxY": 5192.0, "series": [{"data": [[517.0, 195.0], [514.0, 192.0], [9.0, 1236.0], [36.0, 5192.0], [79.0, 189.0], [132.0, 191.0], [180.0, 191.0], [211.0, 205.0], [268.0, 199.5], [262.0, 219.0], [273.0, 199.0], [300.0, 201.0], [306.0, 211.0], [316.0, 194.0], [320.0, 221.0], [341.0, 192.0], [353.0, 230.0], [365.0, 198.0], [354.0, 197.0], [376.0, 225.0], [379.0, 202.0], [370.0, 235.0], [382.0, 235.5], [396.0, 201.0], [391.0, 198.0], [390.0, 195.0], [407.0, 200.0], [405.0, 198.0], [403.0, 214.0], [426.0, 195.0], [418.0, 201.0], [431.0, 216.0], [438.0, 218.0], [443.0, 212.0], [435.0, 235.0], [460.0, 211.0], [471.0, 205.0], [472.0, 198.0], [467.0, 206.0], [480.0, 198.0], [484.0, 202.0], [491.0, 194.0], [487.0, 203.0], [488.0, 205.0], [508.0, 196.0], [499.0, 197.0], [509.0, 192.5], [510.0, 201.0], [504.0, 200.0], [497.0, 200.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[391.0, 209.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 517.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 165.5, "minX": 1.76392446E12, "maxY": 197.73333333333332, "series": [{"data": [[1.76392446E12, 197.73333333333332], [1.76392452E12, 165.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76392452E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.76392446E12, "maxY": 195.88333333333333, "series": [{"data": [[1.76392446E12, 195.88333333333333], [1.76392452E12, 167.16666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76392446E12, 0.18333333333333332]], "isOverall": false, "label": "503", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76392452E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.76392446E12, "maxY": 195.88333333333333, "series": [{"data": [[1.76392446E12, 195.88333333333333], [1.76392452E12, 167.16666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.76392446E12, 0.18333333333333332]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76392452E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.76392446E12, "maxY": 195.88333333333333, "series": [{"data": [[1.76392446E12, 195.88333333333333], [1.76392452E12, 167.16666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76392446E12, 0.18333333333333332]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76392452E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

