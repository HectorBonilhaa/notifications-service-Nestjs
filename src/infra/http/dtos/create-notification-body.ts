/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty({ message: 'The recipientId is missing...' })
  @IsUUID()
  recipientId: string;

  @IsNotEmpty({ message: 'The content is missing...' })
  @Length(5, 249)
  content: string;

  @IsNotEmpty({ message: 'The category is missing...' })
  category: string;
}
