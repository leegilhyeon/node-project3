import express from 'express';
import { createResumeValidator } from '../middlewares/validators/create-resume-validator.middleware.js';
import { prisma } from '../utils/prisma.util.js';
import { updateResumeValidator } from '../middlewares/validators/updated-resume-validator.middleware.js';
import { ResumesController } from '../controllers/resumes.controller.js';
import { ResumeRepository } from '../repositories/resumes.repository.js';
import { ResumesService } from '../services/resumes.service.js';

const resumesRouter = express.Router();

const resumeRepository = new ResumeRepository(prisma)
const resumesService = new ResumesService(resumeRepository)
const resumesController = new ResumesController(resumesService);

// 이력서 생성
resumesRouter.post('/', createResumeValidator, resumesController.createResume)

// 이력서 목록 조회
resumesRouter.get('/', resumesController.getResumes)

// 이력서 상세 조회
resumesRouter.get('/:id', resumesController.getResume)

// 이력서 수정
resumesRouter.put('/:id', updateResumeValidator, resumesController.updateResume)

// 이력서 삭제
resumesRouter.delete('/:id', resumesController.deleteResume)

export { resumesRouter };
