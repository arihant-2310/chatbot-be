import { Controller, Get, Post, UsePipes, Body, Param, ParseIntPipe } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { ValidationPipe } from 'src/common/validation.pipe';
import { CreateQuestionsDto } from './dto/questions.dto';

@Controller('questions')
export class QuestionsController {
    constructor(private readonly questionsService: QuestionsService) {}

    @Get()
    welcome(): string {
        return 'Welcome to COVID-19 questions';
    }

    @Post("/:surveyId")
    @UsePipes(new ValidationPipe())
    async create(
        @Param('surveyId',ParseIntPipe) surveyId:number,
        @Body() createQuestionsDto: CreateQuestionsDto): Promise<any>{
        return this.questionsService.createQuestions(createQuestionsDto,surveyId)
    }
}