(()=>{"use strict";var e={601:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sample_users=t.sample_tags=t.sample_foods=void 0;const i=o(r(828));t.sample_foods=i.default;const s=o(r(509));t.sample_tags=s.default;const n=o(r(916));t.sample_users=n.default},828:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{id:"1",name:"Pizza Pepperoni",cookTime:"10-20",price:10,favorite:!1,origins:["italy"],stars:4.5,imageUrl:"assets/food-1.jpg",tags:["FastFood","Pizza","Lunch"]},{id:"2",name:"Meatball",price:20,cookTime:"20-30",favorite:!0,origins:["persia","middle east","china"],stars:4.7,imageUrl:"assets/food-2.jpg",tags:["SlowFood","Lunch"]},{id:"3",name:"Hamburger",price:5,cookTime:"10-15",favorite:!1,origins:["germany","us"],stars:3.5,imageUrl:"assets/food-3.jpg",tags:["FastFood","Hamburger"]},{id:"4",name:"Fried Potatoes",price:2,cookTime:"15-20",favorite:!0,origins:["belgium","france"],stars:3.3,imageUrl:"assets/food-4.jpg",tags:["FastFood","Fry"]},{id:"5",name:"Chicken Soup",price:11,cookTime:"40-50",favorite:!1,origins:["india","asia"],stars:3,imageUrl:"assets/food-5.jpg",tags:["SlowFood","Soup"]},{id:"6",name:"Vegetables Pizza",price:9,cookTime:"40-50",favorite:!1,origins:["italy"],stars:4,imageUrl:"assets/food-6.jpg",tags:["FastFood","Pizza","Lunch"]}]},509:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{name:"All",count:6},{name:"FastFood",count:4},{name:"Pizza",count:2},{name:"Lunch",count:3},{name:"SlowFood",count:2},{name:"Hamburger",count:1},{name:"Fry",count:1},{name:"Soup",count:1}]},916:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{name:"John Doe",email:"john@gmail.com",password:"12345",address:"Toronto On",isAdmin:!0},{name:"Jane Doe",email:"Jane@gmail.com",password:"12345",address:"Shanghai",isAdmin:!1}]},446:function(e,t,r){var o=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(i,s){function n(e){try{u(o.next(e))}catch(e){s(e)}}function a(e){try{u(o.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(n,a)}u((o=o.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.connectDB=void 0;const s=i(r(185));t.connectDB=()=>o(void 0,void 0,void 0,(function*(){const e=process.env.MONGO_URI;try{yield s.default.connect(e),console.log("DB connected successfully")}catch(e){console.log("Connect failed !!!")}}))},751:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HTTP_NOT_FOUND=t.HTTP_FORBIDDEN=t.HTTP_INTERNAL_SERVER_ERROR=t.HTTTP_OK=t.HTTP_UNAUTHORIZED=t.HTTP_BAD_REQUEST=void 0,t.HTTP_BAD_REQUEST=400,t.HTTP_UNAUTHORIZED=401,t.HTTTP_OK=200,t.HTTP_INTERNAL_SERVER_ERROR=500,t.HTTP_FORBIDDEN=403,t.HTTP_NOT_FOUND=404},345:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStatus=void 0,(r=t.OrderStatus||(t.OrderStatus={})).NEW="NEW",r.CONFIRMED="CONFIRMED",r.SHIPPED="SHIPPED",r.CANCELED="CANCELED",r.REFUNDED="REFUNDED"},64:function(e,t,r){var o=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(i,s){function n(e){try{u(o.next(e))}catch(e){s(e)}}function a(e){try{u(o.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(n,a)}u((o=o.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(860),n=r(559),a=r(601),u=i(r(191));t.default=new class{constructor(){this.router=(0,s.Router)(),this.router,this.initRoutes()}initRoutes(){this.router.get("/seed",this.addSampleFoods),this.router.get("/tags",this.countTagsByCategory),this.router.get("/:foodId",this.getFoodById),this.router.get("/tag/:tagName",this.getAllFoodByTag),this.router.get("/search/:searchTerm",this.searchFood),this.router.get("/",this.getAllFood)}addSampleFoods(e,t){return o(this,void 0,void 0,(function*(){(yield n.Food.countDocuments())>0?u.default.returnData(t,"Seed is already done!"):(yield n.Food.create(a.sample_foods),u.default.returnData(t,"Seed Is Done!"))}))}getAllFood(e,t){return o(this,void 0,void 0,(function*(){const e=yield n.Food.find();u.default.returnData(t,e)}))}searchFood(e,t){return o(this,void 0,void 0,(function*(){const r=new RegExp(e.params.searchTerm,"i"),o=yield n.Food.find({name:{$regex:r}});u.default.returnData(t,o)}))}countTagsByCategory(e,t){return o(this,void 0,void 0,(function*(){const e=yield n.Food.aggregate([{$unwind:"$tags"},{$group:{_id:"$tags",count:{$sum:1}}},{$project:{_id:0,name:"$_id",count:"$count"}}]).sort({count:-1}),r={name:"All",count:yield n.Food.countDocuments()};e.unshift(r),u.default.returnData(t,e)}))}test(e,t){t.send("OK")}getAllFoodByTag(e,t){return o(this,void 0,void 0,(function*(){const r=yield n.Food.find({tags:{$in:[e.params.tagName]}});u.default.returnData(t,r)}))}getFoodById(e,t){return o(this,void 0,void 0,(function*(){const r=yield n.Food.findOne({id:e.params.foodId});u.default.returnData(t,r)}))}}},319:function(e,t,r){var o=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(i,s){function n(e){try{u(o.next(e))}catch(e){s(e)}}function a(e){try{u(o.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(n,a)}u((o=o.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(860),n=r(559),a=r(345),u=r(751),d=i(r(191));t.default=new class{constructor(){this.router=(0,s.Router)(),this.router,this.initRoutes()}initRoutes(){this.router.post("/create",this.createOrder),this.router.get("/track/:id",this.trackOrderByUser),this.router.get("/history/:id",this.getOrderHistoryByUser)}createOrder(e,t){return o(this,void 0,void 0,(function*(){const r=e.body;if(r.items.length<=0)return t.status(u.HTTP_BAD_REQUEST).send("Cart Is Empty!");yield n.Order.deleteOne({user:r.user,status:a.OrderStatus.NEW});const o=new n.Order(Object.assign(Object.assign({},r),{user:r.user}));yield o.save(),d.default.returnData(t,o)}))}trackOrderByUser(e,t){return o(this,void 0,void 0,(function*(){const r=yield n.Order.findOne({user:e.params.id,status:a.OrderStatus.NEW});d.default.returnData(t,r)}))}getOrderHistoryByUser(e,t){return o(this,void 0,void 0,(function*(){const r=yield n.Order.find({user:e.params.id}).populate("user");d.default.returnData(t,r)}))}}},912:function(e,t,r){var o=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(i,s){function n(e){try{u(o.next(e))}catch(e){s(e)}}function a(e){try{u(o.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(n,a)}u((o=o.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(860),n=r(559),a=r(601),u=i(r(191)),d=r(751),l=i(r(432)),c=r(344);t.default=new class{constructor(){this.router=(0,s.Router)(),this.login=(e,t)=>o(this,void 0,void 0,(function*(){const{email:r,password:o}=e.body,i=yield n.User.findOne({email:r});i&&(yield l.default.compare(o,i.password))?u.default.returnData(t,this.generateToken(i)):t.status(d.HTTP_BAD_REQUEST).send("Username or password is invalid!")})),this.register=(e,t)=>o(this,void 0,void 0,(function*(){const{name:r,email:o,password:i,address:s}=e.body;if(yield n.User.findOne({email:o}))return void t.status(d.HTTP_BAD_REQUEST).send("User is already exist, please login!");const a=yield l.default.hash(i,10),c={name:r,email:o.toLowerCase(),password:a,address:s,isAdmin:!1};yield n.User.create(c),u.default.returnData(t,"Register Successfully")})),this.router,this.initRoutes()}initRoutes(){this.router.get("/seed",this.addSampleUsers),this.router.post("/login",u.default.validationAPI("loginSchema"),this.login),this.router.post("/register",u.default.validationAPI("registerSchema"),this.register)}addSampleUsers(e,t){return o(this,void 0,void 0,(function*(){(yield n.User.countDocuments())>0?u.default.returnData(t,"Seed is already done!"):(yield n.User.create(a.sample_users),u.default.returnData(t,"Seed Is Done!"))}))}generateToken(e){const t=(0,c.sign)({email:e.email,isAdmin:e.isAdmin},process.env.JWT_SECRET,{expiresIn:"35d"});return{id:e._id,email:e.email,name:e.name,address:e.address,isAdmin:e.isAdmin,access_token:t,expire:"35d"}}}},191:function(e,t,r){var o=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(i,s){function n(e){try{u(o.next(e))}catch(e){s(e)}}function a(e){try{u(o.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(n,a)}u((o=o.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(344),n=r(751),a=i(r(985)),u=i(r(506));t.default=new class{constructor(){this.loginSchema=u.default.object({email:u.default.string().email().required(),password:u.default.string().required()}),this.registerSchema=u.default.object({name:u.default.string().required(),email:u.default.string().email().required(),password:u.default.string().required(),confirmPassword:u.default.string().required(),address:u.default.string().required()}),this.apiLimiter=(0,a.default)({windowMs:1e3,max:2,standardHeaders:!0,legacyHeaders:!1,message:"Too many requests. Try again later"}),this.errorHandler=(e,t,r,o)=>{console.error(e.stack),r.status(n.HTTP_INTERNAL_SERVER_ERROR).send("Internal Server Error")},this.validationAPI=e=>(t,r,o)=>{if("loginSchema"===e){const{error:e,value:i}=this.loginSchema.validate(t.body);return e?r.status(n.HTTP_BAD_REQUEST).json({error:e.details[0].message}):o()}const{error:i,value:s}=this.registerSchema.validate(t.body);return i?r.status(n.HTTP_BAD_REQUEST).json({error:i.details[0].message}):o()}}verifyToken(e,t,r){return o(this,void 0,void 0,(function*(){try{const o=e.headers.authorization,i=null==o?void 0:o.split(" ")[1];if(!i)return t.status(n.HTTP_UNAUTHORIZED).json({error:"Missing token"});const a=yield(0,s.verify)(i,process.env.JWT_SECRET);e.user=a,r()}catch(e){t.status(n.HTTP_FORBIDDEN).json({error:"Invalid token"})}}))}returnData(e,t){e.status(n.HTTTP_OK).json(t)}}},569:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=r(185),i=new o.Schema({id:{type:String,required:!0},name:{type:String,required:!0},price:{type:Number,required:!0},tags:[{type:String}],favorite:{type:Boolean,default:!1},stars:{type:Number,required:!0},imageUrl:{type:String,required:!0},origins:[{type:String,required:!0}],cookTime:{type:String,required:!0}},{timestamps:!0});t.default=(0,o.model)("Food",i)},795:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=r(185),i=r(345),s=new o.Schema({name:{type:String,required:!0},address:{type:String,required:!0},addressLatLng:{lat:{type:String,required:!0},lng:{type:String,required:!0}},totalPrice:{type:Number,required:!0},items:[{food:{type:o.Schema.Types.ObjectId,required:!0,ref:"Food"},price:{type:Number,required:!0},quantity:{type:Number,required:!0}}],status:{type:String,default:i.OrderStatus.NEW},user:{type:o.Schema.Types.ObjectId,required:!0,ref:"User"}},{timestamps:!0});t.default=(0,o.model)("Order",s)},477:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=r(185),i=new o.Schema({name:{type:String,required:!0},email:{type:String,required:!0,unique:!0},password:{type:String,required:!0},address:{type:String,required:!0},isAdmin:{type:Boolean,required:!0}},{timestamps:!0});t.default=(0,o.model)("User",i)},559:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.User=t.Order=t.Food=void 0;const i=o(r(569));t.Food=i.default;const s=o(r(795));t.Order=s.default;const n=o(r(477));t.User=n.default},678:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(860),s=o(r(64)),n=o(r(912)),a=o(r(319)),u=o(r(191)),d=(0,i.Router)();d.use("/foods",u.default.apiLimiter,u.default.verifyToken,s.default.router),d.use("/users",u.default.apiLimiter,n.default.router),d.use("/orders",u.default.apiLimiter,u.default.verifyToken,a.default.router),t.default=d},837:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(r(678)),s=r(751);t.default=e=>{e.use("/api",i.default),e.use("*",((e,t)=>{t.status(s.HTTP_NOT_FOUND).json("No service found")}))}},338:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(r(860)),s=o(r(582)),n=o(r(470)),a=(o(r(256)),r(446)),u=o(r(837)),d=o(r(191)),l=o(r(142));l.default.config();const c=(0,i.default)(),f=process.env.PORT||6e3;n.default.existsSync(".env")?l.default.config():console.error(".env file not found."),c.use((0,s.default)({credentials:!0,origin:["http://localhost:4200"]})),c.use(i.default.json()),c.use(d.default.errorHandler),(0,a.connectDB)(),(0,u.default)(c),c.listen(f,(()=>{console.log(`Server is running on port ${f}`)}))},432:e=>{e.exports=require("bcryptjs")},582:e=>{e.exports=require("cors")},142:e=>{e.exports=require("dotenv")},860:e=>{e.exports=require("express")},985:e=>{e.exports=require("express-rate-limit")},470:e=>{e.exports=require("fs-extra")},506:e=>{e.exports=require("joi")},344:e=>{e.exports=require("jsonwebtoken")},185:e=>{e.exports=require("mongoose")},256:e=>{e.exports=require("morgan")}},t={};!function r(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,r),s.exports}(338)})();