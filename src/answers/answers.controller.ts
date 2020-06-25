import { Controller, Get, Post, UsePipes, Param, ParseIntPipe, Body } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { CreateAnswersDto } from './dto/answers.dto';

@Controller('answers')
export class AnswersController {

    constructor(private readonly answersService: AnswersService) {}

    @Get()
    welcome(): string {
        return 'Welcome to COVID-19 user responses';
    }

    @Post("/:userId")
    async create(
        @Param('userId',ParseIntPipe) userId:number,
        @Body() createAnswersDto:CreateAnswersDto ): Promise<any>{
        return this.answersService.submitUserResponse(createAnswersDto,userId)
    }
}