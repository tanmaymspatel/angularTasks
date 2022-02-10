export interface Resume{
    fullName: string;
    designation: string;
    email: string;
    phoneNumber: number;
    profile: string;
    technicalSkills: techArray[];
    experience: expArray[];
    education: edArray[]
}

class techArray{
    techSkillName: string;
     
}

class expArray{
    CompanyName: string;
    jobPosition: string;
    jobDescription: string;
    jobDurationStart: number;
    jobDurationEnd: number
}

class edArray{
    instituteName: string;
    degreeName: string;
    cgpa: number
}