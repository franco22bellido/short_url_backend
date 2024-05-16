import Url from "../models/url.model.js"
import { nanoid } from "nanoid"

export const getUrls = async (req, res) => {
    const urls = await Url.find({ user: req.user.userId }).populate('user', 
        {username: true, name: true}
    );
    return res.json(urls)
}
export const getByShortUrl = async (req, res) => {
    const { shortUrl } = req.params;
    const {userId} = req.user;

    let urlFound = await Url.findOne({ shortUrl, user: userId});
    urlFound.clicks = urlFound.clicks + 1;
    await urlFound.save()
    if (!urlFound) return res.status(404).json({ message: "url not found" })
    return res.status(200).json(urlFound);
}
export const craeteUrl = async (req, res) => {
    const shortUrl = nanoid(4)
    const { url } = req.body;
    const newUrl = new Url({
        url,
        shortUrl,
        user: req.user.userId,
        clicks: 0
    })
    
    const urlCreated = await newUrl.save()
    res.json(urlCreated)
}
const updateUrl = (req, res) => {

}
export const deleteUrl = async (req, res) => {
    const { id } = req.params;
    const {userId} = req.user;
    const result = (await Url.deleteOne({ _id: id, user: userId})).deletedCount
    if (!result) return res.status(404).json({ message: "url not found" })
    return res.status(204).json()
}