import page from './base/pagelife'
import touch from './base/touch'
import scroll from './base/scroll'

import swiper from './components/swiper'
import flatlist from './components/flatlist'
import dirtycheck from './components/dirtycheck.js'
import clusterize from './components/clusterize'


const Swiper = function(obj){return new swiper(obj)};
const Page = function(obj){return new page(obj)};
const Touch = function(obj){return new touch(obj)};
const FlatList = function(obj){return new flatlist(obj)};
const Clusterize = function(obj){return new clusterize(obj)};
const Scroll = function(obj){return new scroll(obj)};
const Dirty = function(obj){return new dirtycheck(obj)};

export {
    Swiper,
    Page,
    Touch,
    FlatList,
    Clusterize,
    Scroll,
    Dirty
};