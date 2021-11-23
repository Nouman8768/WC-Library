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
import { map, of, tap } from 'rxjs';
import { BooksService } from 'src/genres/books/books.service';
@ApiTags('Book Cover Images')
@Controller('images')
export class ImagesController {
  static a = './uploads/images';
  constructor(private readonly bookservice: BooksService) {}

  @Post('upload')
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
    return of({
      imageid: file.filename,
      imagepath: file.destination,
      originalname: file.originalname,
    });
    // const book: Book = req;
    // return this.bookservice
    //   .updateone(book.bid, { coverimage: file.filename })
    //   .pipe(
    //     tap(
    //       (book: Book) => console.log(book),
    //       map((book: Book) => ({ coverimage: book.coverimage })),
    //     ),
    //   );
  }
}
