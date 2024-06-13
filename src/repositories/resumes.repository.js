import { HTTP_STATUS } from "../constants/http-status.constant.js";
import { MESSAGES } from "../constants/message.constant.js";

export class ResumeRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    createResume = async (authorId, title,content) => {
        const resume = await this.prisma.resume.create({
                data: {
                authorId,
                title,
                content,
              },
            });
            return resume
    }
    findResumes = async (authorId, sortOrder) => {
        const resumes = await this.prisma.resume.findMany({
            where: { authorId },
            orderBy: { createdAt: sortOrder},
            include: { author: true},
          });
        
        const allResumes = resumes.map((resume) => {
              return {
                id: resume.id,
                authorName: resume.author.name,
                title: resume.title,
                content: resume.content,
                status: resume.status,
                createdAt: resume.createdAt,
                updatedAt: resume.updatedAt,
              };
            });
            return allResumes;
    }
    findResumesId = async (authorId, id) => {
        const resume = await this.prisma.resume.findUnique({
            where:{id: +id, authorId},
            include: {author: true},
        });
        return resume;
    }

    updateResume =async (authorId, id, title, content) => {
        const resume = await this.prisma.resume.findUnique({
            where: { id: +id, authorId },
                    });
        if (!resume) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({
                status: HTTP_STATUS.NOT_FOUND,
                message: MESSAGES.RESUMES.COMMON.NOT_FOUND,
            });
            }
        const updateResume = await this.prisma.resume.update({
            where: { id: +id, authorId },
            data: {
              ...(title && { title }),
              ...(content && { content }),
            },
        });
        return updateResume;
    }

    deleteResume = async (authorId, id) => {
        const resume = await this.prisma.resume.findUnique({
          where: { id: +id, authorId },
        });
    
        if (!resume) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({
              status: HTTP_STATUS.NOT_FOUND,
              message: MESSAGES.RESUMES.COMMON.NOT_FOUND,
            });
          }
        
        return this.prisma.resume.delete({ where: { id: +id, authorId } });
    }
}
