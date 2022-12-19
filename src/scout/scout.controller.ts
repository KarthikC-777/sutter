import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { profileDto } from './dto/profile.dto';
import { paymentDto } from './dto/payment.dto';
import { planDto } from './dto/planning.dto';
import { loginDto } from './dto/login.dto';
import { surveydto } from './dto/survey.dto';

@Controller('scouts')
@ApiTags('Scout Product')
export class ScoutController {
  @Post('profile')
  @ApiOperation({ summary: 'Build a profile' })
  @ApiCreatedResponse({ description: 'Registered Successfull' })
  @ApiConflictResponse({ description: ' UserName Already Taken' })
  @ApiBadRequestResponse({
    description: 'Incomplete Field',
  })
  @ApiInternalServerErrorResponse({ description: 'Server Error' })
  async setUpProfile(@Body() profile: profileDto) {
    return {
      message: 'Successfully Registered , Lets Go',
      statusCode: HttpStatus.CREATED,
      userId: 'sutter001',
      error: 'No error',
    };
  }

  @Patch('profile')
  @ApiOperation({ summary: 'Update a profile' })
  @ApiCreatedResponse({ description: 'Updated Successfull' })
  @ApiConflictResponse({ description: ' UserName Already Taken' })
  @ApiInternalServerErrorResponse({ description: 'Server Error' })
  async updateProfile(@Body() profile: profileDto) {
    return {
      message: 'Successfully Updated',
      statusCode: HttpStatus.OK,
      userId: 'sutter001',
      error: 'No error',
    };
  }

  @Post('login')
  @ApiOperation({ summary: 'Signin' })
  @ApiOkResponse({ description: 'User Logged in Successfully' })
  @ApiBadRequestResponse({ description: 'Incorrect Password/user name' })
  @ApiNotFoundResponse({ description: 'User Not found' })
  @ApiInternalServerErrorResponse({ description: 'Server Error' })
  async signIn(@Body() login: loginDto) {
    return {
      message: 'Successfully Registered , Lets Go',
      statusCode: HttpStatus.OK,
      accessToken:
        'dbhagfdgkkarthikfurggfy$%gwgdygwykushalg29797409thug783y783geygdefeu',
      refreshtoken:
        'dcwdichihuehemafnvjfngw9iodjiyesrijith933877211gihihvhruvhugsrgy',
      userId: 'sutter001',
      error: 'No error',
    };
  }

  @Patch('plan')
  @ApiOperation({ summary: 'Choose the plan' })
  @ApiOkResponse({ description: 'Continue Payment' })
  @ApiInternalServerErrorResponse({ description: 'Server Error' })
  async selectPlan(@Body() plan: planDto) {
    return {
      message: 'Continue Payment',
      statusCode: HttpStatus.OK,
      planId: 'PLAN001',
      error: 'No error',
    };
  }

  @Patch('payment')
  @ApiOperation({ summary: 'Finalize the payment' })
  @ApiOkResponse({ description: 'Payment Successfull' })
  @ApiBadRequestResponse({ description: 'Payment Unsuccessfull' })
  @ApiInternalServerErrorResponse({ description: 'Server Error' })
  async paymentMethod(@Body() payment: paymentDto) {
    return {
      message: 'Paid Successfully',
      statusCode: HttpStatus.OK,
      paymentId: 'T2212151847506635885907',
      error: 'No error',
    };
  }

  // @Patch('interest-level')
  // @ApiOperation({ summary: 'Survey of interest level' })
  // @ApiCreatedResponse({ description: 'Interest level successfully recorded' })
  // @ApiInternalServerErrorResponse({ description: 'Server Error' })
  // async intrestLevel(@Body() interestLevel: interestLevelDto) {
  //   return 'Interest level successfully stored,Thanks for sharing';
  // }

  @Patch('track')
  @ApiOperation({ summary: 'Survey of mood' })
  @ApiOkResponse({ description: 'Thanks for sharing!!' })
  @ApiInternalServerErrorResponse({ description: 'Server Error' })
  async survey(@Body() survey: surveydto) {
    return {
      message: 'Thanks for sharing!!',
      statusCode: HttpStatus.OK,
      error: 'No error',
    };
  }
}
