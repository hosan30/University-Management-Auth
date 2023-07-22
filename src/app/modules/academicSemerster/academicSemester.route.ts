import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { academicSemesterController } from './academicSemester.controller'
import { academicSemesterValidation } from './academicSemester.validation'

const router = express.Router()

router.get('/', academicSemesterController.getSemesters)
router.get('/:id', academicSemesterController.getSingleSemester)

router.post(
  '/create-academic-semester',
  validateRequest(academicSemesterValidation.createAcademicSemesterZodSchema),
  academicSemesterController.createSemester,
)

router.patch(
  '/:id',
  validateRequest(academicSemesterValidation.updateAcademicSemesterZodSchema),
  academicSemesterController.updateSemester,
)
router.delete('/:id', academicSemesterController.deleteSemester)

export const academicSemesterRoutes = router
