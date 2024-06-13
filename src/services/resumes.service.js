export class ResumesService {
    constructor(resumeRepository) {
        this.resumeRepository = resumeRepository
    }
    createResume = async (authorId, title,content) => {
        const resume = await this.resumeRepository.createResume(authorId, title,content)
        return resume;
    }

    findResumes = async (authorId, sort) => {
        let sortOrder = sort?.toLowerCase();
        if (sortOrder !== 'desc' && sortOrder !== 'asc') {
              sortOrder = 'desc';
            }
        const resumes = await this.resumeRepository.findResumes(authorId, sortOrder);
        
        return resumes;
    }

    getResume = async (authorId, id) => {
        const resume = await this.resumeRepository.findResumesId(authorId, id)

        return {
            id : resume.id,
            authorId : resume.authorId,
            title : resume.title,
            content : resume.content,
            status : resume.status,
            createdAt : resume.createdAt,
            updatedAt : resume.updatedAt,
        }
    }

    updateResume = async (authorId, id, title, content) => {
        const resume =await this.resumeRepository.updateResume(authorId, id, title, content)
        
        return resume;
    }

    deleteResume = async (authorId, id) => {
        const resume = await this.resumeRepository.deleteResume(authorId, id)

        return resume;
    }
}