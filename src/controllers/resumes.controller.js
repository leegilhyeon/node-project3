import { HTTP_STATUS } from "../constants/http-status.constant.js";
import { MESSAGES } from "../constants/message.constant.js";

export class ResumesController {
    constructor(resumesService) {
        this.resumesService = resumesService;
    }
    //이력서 생성
    createResume = async (req, res, next) => {
        try{
            const user = req.user;
            const { title, content } = req.body;
             const authorId = user.id;
            const resume = await this.resumesService.createResume(authorId, title,content);
        
            return res.status(HTTP_STATUS.CREATED).json({
              status: HTTP_STATUS.CREATED,
              message: MESSAGES.RESUMES.CREATE.SUCCEED,
              data: resume,
            });
        } catch(err) {
            next(err);
        }
    }
    //이력서 목록 조회
    getResumes = async (req, res, next) => {
        try{
            const user = req.user;
            const authorId = user.id;
            const { sort } = req.query;
            const resumes = await this.resumesService.findResumes(authorId, sort);

            return res.status(HTTP_STATUS.OK).json({
              status: HTTP_STATUS.OK,
              message: MESSAGES.RESUMES.READ_LIST.SUCCEED,
              data: resumes,
            });
        } catch(error) {
            next(error);
        }
    }

    //이력서 상세조회
    getResume = async (req, res, next) => {
        try {
            const user = req.user;
            const authorId = user.id;       
            const { id } = req.params;
            const resume = await this.resumesService.getResume(authorId, id);

            if (!resume) {
              return res.status(HTTP_STATUS.NOT_FOUND).json({
                status: HTTP_STATUS.NOT_FOUND,
                message: MESSAGES.RESUMES.COMMON.NOT_FOUND,
              });
            }

            return res.status(HTTP_STATUS.OK).json({
              status: HTTP_STATUS.OK,
              message: MESSAGES.RESUMES.READ_DETAIL.SUCCEED,
              data: resume,
            });
          } catch (error) {
            next(error);
          }
    }
    //이력서 수정
    updateResume = async (req, res, next) => {
        try {
            const user = req.user;
            const authorId = user.id;
            const { id } = req.params;
            const { title, content } = req.body;

            const resume = await this.resumesService.updateResume(authorId, id, title, content)

         return res.status(HTTP_STATUS.OK).json({
          status: HTTP_STATUS.OK,
          message: MESSAGES.RESUMES.UPDATE.SUCCEED,
          data:resume,
        });
        } catch (error) {
          next(error);
        }
    }
  //이력서 삭제
  deleteResume = async (req, res, next) => {
    try {
        const user = req.user;
        const authorId = user.id;
        const { id } = req.params;

        const resume = await this.resumesService.deleteResume(authorId, id)
    
        return res.status(HTTP_STATUS.OK).json({
          status: HTTP_STATUS.OK,
          message: MESSAGES.RESUMES.DELETE.SUCCEED,
          data: resume,
        });
      } catch (error) {
        next(error);
      }
  }

    }
