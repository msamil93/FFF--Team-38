import News from "../models/newsModel.js";

const createNews = async (req,res) => {
    
    try {
        const news = await News.create(req.body)
        res.status(201).json({
            succeded: true,
            news,
        });
        
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        });
    }
};

const getAllNews = async (req,res) => {
    
    try {
        const news = await News.find({})
        res.status(200).render("news",  {
            news,
            link: "news",
        })
        
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        });
    }
};

const getANews = async (req,res) => {
    
    try {
        const a_news = await News.findById ({_id: req.params.id})
        res.status(200).render("a_news",  {
            a_news,
            link: "news",
        })
        
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        });
    }
};

export {createNews, getAllNews, getANews};
