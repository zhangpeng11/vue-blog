let mongoose = require("mongoose");
let type = require("../models/type");

// 添加标签
type.add = function(data, callback){
    type.create(data, function(err, data){
        if (err) {
            return callback("err");
        }else {
            return callback(data);
        }
    })
}

// 查询标签
type.finds = function(callback){
    type.find({},function(err, data){
        if(err){
            return callback("err");
        }else {
            return callback(data);
        }
    })
}
// 添加标签文章
type.addid = function(tag,id,callback){
    type.update({"_id":tag},{"$addToSet":{"article":id}},function(err, data){
        if(err){
            return callback("err");
        }else {
            return callback(data);
        }
    })
}
// 删除标签文章
type.delid = function(tag, id, callback){
    type.update({"_id":tag},{"$pull":{"article":id}},function(err, data){
        if(err){
            return callback("err");
        }else {
            return callback(data);
        }
    })
}
module.exports = type;