import { Gender } from "./prisma.types"
import { CivilStatus } from "./prisma.types"
import { Nationality } from "./prisma.types"
import { Education } from "./prisma.types"
import { WorkRole } from "./prisma.types"
import { Department } from "./prisma.types"
import { EmploymentType } from "./prisma.types"

export type User = {
    uuid: string
    username: string
    password: string
    lastName: string
    firstName: string
    middleName: string | null
    contactEmail: string
    contactNumber: string
    profileGender: Gender | null
    profileBirthday: Date | null
    profileCivilStatus: CivilStatus | null
    profileNationality: Nationality | null
    profileAddress: string | null
    educationLevel: Education | null
    educationCourse: string | null
    educationYearStart: number | null
    educationYearGraduate: number | null
    educationSchool: string | null
    workRole: WorkRole
    workDepartment: Department
    workTitle: string
    workCode: string | null
    workEmploymentType: EmploymentType
    workHireDate: Date
    createdAt: Date
    updatedAt: Date
  }