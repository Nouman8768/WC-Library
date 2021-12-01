import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Request,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { BooksService } from 'src/genres/books/books.service';
@ApiTags('Book Cover Images')
@Controller('images')
export class ImagesController {
  static imageUrl: string;
  static a = '/uploads/images/';
  constructor(private readonly bookservice: BooksService) {}

  @Post('uploadimage')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: ImagesController.a,
        filename: (req, file, cb) => {
          const filename: string = Array(10)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${filename}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File, @Request() req) {
    console.log(file);
    return this.imageUrl(file);
  }

  private imageUrl(file: Express.Multer.File) {
    ImagesController.imageUrl = `/uploads/images/${file.filename}`;
    return ImagesController.imageUrl;
  }
}
