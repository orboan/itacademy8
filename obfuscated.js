var _0x3b9b44=_0x4348;(function(_0x4b56dc,_0x3384e1){var _0x32d29d=_0x4348,_0x1de406=_0x4b56dc();while(!![]){try{var _0x39054e=parseInt(_0x32d29d(0x1e1))/0x1+-parseInt(_0x32d29d(0x1ec))/0x2+-parseInt(_0x32d29d(0x1da))/0x3*(-parseInt(_0x32d29d(0x1d8))/0x4)+parseInt(_0x32d29d(0x1d9))/0x5+-parseInt(_0x32d29d(0x1e9))/0x6+-parseInt(_0x32d29d(0x1e7))/0x7+parseInt(_0x32d29d(0x1eb))/0x8;if(_0x39054e===_0x3384e1)break;else _0x1de406['push'](_0x1de406['shift']());}catch(_0x1104a8){_0x1de406['push'](_0x1de406['shift']());}}}(_0x2e48,0x768d2),use(_0x3b9b44(0x1ed)),db['res'][_0x3b9b44(0x1e6)](),db[_0x3b9b44(0x1e3)]['find']({}),db[_0x3b9b44(0x1e3)][_0x3b9b44(0x1e0)]({},{'restaurant_id':0x1,'name':0x1,'borough':0x1,'cuisine':0x1}),db[_0x3b9b44(0x1e3)][_0x3b9b44(0x1e0)]({},{'_id':0x0,'restaurant_id':0x1,'name':0x1,'borough':0x1,'cuisine':0x1}),db[_0x3b9b44(0x1e3)]['find']({},{'_id':0x0,'restaurant_id':0x1,'name':0x1,'borough':0x1,'address.zipcode':0x1}),db[_0x3b9b44(0x1e3)]['find']({'borough':_0x3b9b44(0x1dd)}),db[_0x3b9b44(0x1e3)][_0x3b9b44(0x1e0)]({'borough':_0x3b9b44(0x1dd)})[_0x3b9b44(0x1ee)](0x5),db[_0x3b9b44(0x1e3)][_0x3b9b44(0x1e0)]({'borough':_0x3b9b44(0x1dd)})[_0x3b9b44(0x1e2)](0x5)[_0x3b9b44(0x1ee)](0x5),db['res'][_0x3b9b44(0x1e0)]({'grades.score':{'$gt':0x5a}}),db[_0x3b9b44(0x1e3)][_0x3b9b44(0x1e0)]({'grades':{'$elemMatch':{'score':{'$gt':0x50,'$lt':0x64}}}}),db['res'][_0x3b9b44(0x1e0)]({'address.coord.0':{'$lt':-95.754168}}),db[_0x3b9b44(0x1e3)][_0x3b9b44(0x1e0)]({'$and':[{'cuisine':{'$ne':_0x3b9b44(0x1dc)}},{'grades.score':{'$gt':0x46}},{'address.coord.0':{'$lt':-65.754168}}]}),db[_0x3b9b44(0x1e3)][_0x3b9b44(0x1df)]([{'$match':{'cuisine':{'$ne':_0x3b9b44(0x1dc)},'grades.score':{'$gt':0x46},'address.coord.0':{'$lt':-65.754168}}}]),db['res']['find']({'$and':[{'cuisine':{'$ne':_0x3b9b44(0x1dc)}},{'grades.grade':{'$eq':'A'}},{'borough':{'$ne':'Brooklyn'}}]})['sort']({'cuisine':-0x1}),db[_0x3b9b44(0x1e3)][_0x3b9b44(0x1e0)]({'name':{'$in':[/^Wil/]}},{'restaurant_id':0x1,'name':0x1,'borough':0x1,'cuisine':0x1,'_id':0x0}),db[_0x3b9b44(0x1e3)][_0x3b9b44(0x1e0)]({'name':{'$in':[/ces$/]}},{'restaurant_id':0x1,'name':0x1,'borough':0x1,'cuisine':0x1,'_id':0x0}),db['res'][_0x3b9b44(0x1e0)]({'name':{'$in':[/Reg/]}},{'restaurant_id':0x1,'name':0x1,'borough':0x1,'cuisine':0x1,'_id':0x0}),db['res']['aggregate']([{'$match':{'$or':[{'cuisine':{'$eq':'American\x20'}},{'cuisine':{'$eq':_0x3b9b44(0x1e4)}}],'borough':{'$eq':'Bronx'}}}]),db[_0x3b9b44(0x1e3)]['aggregate']([{'$match':{'$or':[{'borough':{'$eq':_0x3b9b44(0x1e8)}},{'borough':{'$eq':_0x3b9b44(0x1e5)}},{'borough':{'$eq':_0x3b9b44(0x1dd)}},{'borough':{'$eq':'Brooklyn'}}]}},{'$project':{'restaurant_id':0x1,'name':0x1,'borough':0x1,'cuisine':0x1,'_id':0x0}}]),db['res'][_0x3b9b44(0x1df)]([{'$match':{'$and':[{'borough':{'$ne':'Staten\x20Island'}},{'borough':{'$ne':_0x3b9b44(0x1e5)}},{'borough':{'$ne':_0x3b9b44(0x1dd)}},{'borough':{'$ne':'Brooklyn'}}]}},{'$project':{'restaurant_id':0x1,'name':0x1,'borough':0x1,'cuisine':0x1,'_id':0x0}}]),db[_0x3b9b44(0x1e3)][_0x3b9b44(0x1df)]([{'$match':{'grades.score':{'$lte':0xa}}},{'$project':{'restaurant_id':0x1,'name':0x1,'borough':0x1,'cuisine':0x1,'_id':0x0}}]),db[_0x3b9b44(0x1e3)]['aggregate']([{'$match':{'$or':[{'$and':[{'cuisine':{'$ne':'American\x20'}},{'cuisine':{'$ne':_0x3b9b44(0x1e4)}}]},{'name':{'$in':[/^Wil/]}}]}},{'$project':{'restaurant_id':0x1,'name':0x1,'borough':0x1,'cuisine':0x1,'_id':0x0}}]),db[_0x3b9b44(0x1e3)]['find']({'grades':{'$elemMatch':{'grade':{'$eq':'A'},'score':{'$eq':0xb},'date':{'$eq':ISODate(_0x3b9b44(0x1ea))}}}},{'restaurant_id':0x1,'name':0x1,'grades':0x1,'_id':0x0}),db[_0x3b9b44(0x1e3)][_0x3b9b44(0x1e0)]({'$and':[{'grades.1.date':{'$eq':ISODate(_0x3b9b44(0x1ea))}},{'grades.1.score':{'$eq':0x9}},{'grades.1.grade':{'$eq':'A'}}]},{'restaurant_id':0x1,'name':0x1,'grades':0x1,'_id':0x0}),db[_0x3b9b44(0x1e3)]['find']({'$and':[{'address.coord.1':{'$gt':0x2a}},{'address.coord.1':{'$lte':0x34}}]},{'restaurant_id':0x1,'name':0x1,'address':0x1,'_id':0x0}),db[_0x3b9b44(0x1e3)]['find']({})[_0x3b9b44(0x1de)]({'name':0x1}),db[_0x3b9b44(0x1e3)][_0x3b9b44(0x1e0)]({})[_0x3b9b44(0x1de)]({'name':-0x1}),db[_0x3b9b44(0x1e3)][_0x3b9b44(0x1e0)]({},{'_id':0x0,'cuisine':0x1,'borough':0x1})[_0x3b9b44(0x1de)]({'cuisine':0x1,'borough':-0x1}),db[_0x3b9b44(0x1e3)][_0x3b9b44(0x1e0)]({'address.street':{'$exists':!![]}}),db['res'][_0x3b9b44(0x1e0)]({'address.street':{'$exists':![]}}),db[_0x3b9b44(0x1e3)][_0x3b9b44(0x1e0)]({'$and':[{'address.coord.0':{'$type':_0x3b9b44(0x1db)}},{'address.coord.1':{'$type':_0x3b9b44(0x1db)}}]}),db[_0x3b9b44(0x1e3)][_0x3b9b44(0x1e0)]({'grades.score':{'$mod':[0x7,0x0]}},{'_id':0x0,'name':0x1,'grades.grade':0x1,'restaurant_id':0x1}),db[_0x3b9b44(0x1e3)]['find']({'name':{'$in':[/mon/]}},{'address.coord':0x1,'name':0x1,'borough':0x1,'cuisine':0x1,'_id':0x0}),db[_0x3b9b44(0x1e3)][_0x3b9b44(0x1e0)]({'name':{'$in':[/^Mad/]}},{'address.coord':0x1,'name':0x1,'borough':0x1,'cuisine':0x1,'_id':0x0}));function _0x4348(_0x36bd55,_0x4942c0){var _0x2e487f=_0x2e48();return _0x4348=function(_0x4348fe,_0x1a43d3){_0x4348fe=_0x4348fe-0x1d8;var _0x5af128=_0x2e487f[_0x4348fe];return _0x5af128;},_0x4348(_0x36bd55,_0x4942c0);}function _0x2e48(){var _0x2da42a=['find','431503rrYAKm','skip','res','Chinese','Queens','findOne','1896426jMVLBg','Staten\x20Island','4808244iQNywM','2014-08-11T00:00:00Z','11822968XpLUfM','1668364aFEWma','ita','limit','1394140CFOyjY','670755ZnnDOz','3DRkHLY','double','American\x20','Bronx','sort','aggregate'];_0x2e48=function(){return _0x2da42a;};return _0x2e48();}