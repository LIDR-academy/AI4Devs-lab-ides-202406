import { AddCandidateUseCase } from '../../application/AddCandidateUseCase';
import { Candidate } from '../../domain/entities/Candidate';
import { Email } from '../../domain/entities/Email';
import { PhoneNumber } from '../../domain/entities/PhoneNumber';

class MockCandidateRepository {
    public async add(candidate: Candidate): Promise<void> {
        // Mock implementation
    }
}

describe('AddCandidateUseCase', () => {
    it('should add a candidate', async () => {
        const mockRepository = new MockCandidateRepository();
        const useCase = new AddCandidateUseCase(mockRepository);
        const candidate = new Candidate(
            'John', 'Doe', 
            new Email('john.doe@example.com'), 
            new PhoneNumber('1234567890'), 
            '123 Main St', 
            [], [], []
        );

        await expect(useCase.execute(candidate)).resolves.not.toThrow();
    });
});