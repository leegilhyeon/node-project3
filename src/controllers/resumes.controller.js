import { ResumesService } from "../services/resumes.service";

export class ResumesController {
    resumesService = new ResumesService();

    createResume = async (req, res, next) => {
        try{
            const { title, content } = req.body;
            const user = req.user;
            const authorId = user.id;

            const createResume = await this.resumesService.createResume(
                authorId,
                title,
                content,
            );

            return res.status(201).json({ data: createResume });
        } catch(err) {
            next(err);
        }
    }

    getResumes = async (req, res, next) => {
        try{
            const resumes = await this.resumesService.findManyResumes();
            
            return res.status(200).json({ data: resumes });
        } catch(err) {
            next(err);
        }
    }
}