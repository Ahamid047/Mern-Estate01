import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        },
    email:{
        type:String,
        required:true,
        unique:true,
        },
    password:{
        type:String,
        required:true,
        },
    avatar:{
        type:String,
        default:"https://in.images.search.yahoo.com/images/view;_ylt=AwrKAQqqtdJmeYIu.4i9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzkzM2RlNWYyYzRhOThiZWQzZTk2MjE4NTQ3NTJkOWE4BGdwb3MDNDYEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dnormal%2Bprofile%2Bpic%26ei%3DUTF-8%26type%3DE210IN885G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D46&w=2048&h=2048&imgurl=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2c%2FDefault_pfp.svg%2F2048px-Default_pfp.svg.png&rurl=https%3A%2F%2Fmungfali.com%2Fexplore%2FInstagram-Normal-PFP&size=62.8KB&p=normal+profile+pic&oid=933de5f2c4a98bed3e9621854752d9a8&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Instagram+Normal+PFP&b=0&ni=80&no=46&ts=&tab=organic&sigr=4LGdxgW_IxGW&sigb=LHtN_fOplPEe&sigi=gtMfKOefKLp_&sigt=Qad_iFSEv2sw&.crumb=dIEVqtbZtpg&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210IN885G0"
    },
},{timestamps:true });

const User = mongoose.model('User', userSchema);

export default User;