import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Reservation extends Document {
  @Prop({ type: String })
  propertyId?: string;

  @Prop({ type: String })
  propertyName?: string;

  @Prop({ type: Date, required: true })
  checkIn: Date;

  @Prop({ type: Date, required: true })
  checkOut: Date;

  @Prop({
    type: [{ userId: String, name: String, email: String, phone: String }],
    required: true,
  })
  residents: { userId: string; name: string; email: string; phone: string }[];
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
