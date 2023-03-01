exports.getIndexPage = (req,res) => {
    res.status(200).render('index',{
    })
}

exports.getFolder1Page = (req,res) => {
    res.status(200).render('folder1',{
    })
}

exports.getFolder2Page = (req,res) => {
    res.status(200).render('folder2',{
    })
}
